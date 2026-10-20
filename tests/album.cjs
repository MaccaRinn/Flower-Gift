// Run with Playwright installed: node tests/album.cjs
const { chromium } = require('playwright');
const assert = require('node:assert/strict');
const { pathToFileURL } = require('node:url');
const path = require('node:path');
const pageUrl = pathToFileURL(path.resolve(__dirname, '../index.html')).href;
const expectedVideos = [
  '1792505081165_2070230567482948539_2346463872828108177.mp4',
  '1792505081221_2070230567482948539_2346463872828108177.mp4',
  '1792505081345_2070230567482948539_2346463872828108177.mp4'
];

(async () => {
  const browser = await chromium.launch();
  try {
    const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, reducedMotion: 'reduce' });
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto(pageUrl);
    assert.equal(await page.locator('#memoryAlbum').isHidden(), true, 'videos wait until the letter opens');
    await page.locator('#openCard').click();
    await page.locator('#viewAlbum').click();
    await page.waitForFunction(() => [...document.querySelectorAll('.album-card video')]
      .every(video => video.readyState >= HTMLMediaElement.HAVE_METADATA));

    const videos = page.locator('.album-card video');
    assert.equal(await videos.count(), 3, 'album contains three videos');
    assert.deepEqual(await videos.evaluateAll(elements => elements.map(video => decodeURIComponent(new URL(video.src).pathname.split('/').pop()))), expectedVideos);
    assert.equal(await videos.evaluateAll(elements => elements.every(video => video.controls && video.playsInline && video.duration > 0)), true,
      'videos have playback controls and loaded metadata');
    assert.equal(await page.locator('#toggleAlbum').innerText(), 'Xem video ♡');
    await page.locator('#toggleAlbum').click();
    assert.equal(await page.locator('#toggleAlbum').getAttribute('aria-expanded'), 'true');
    assert.equal(await page.locator('#toggleAlbum').innerText(), 'Ẩn video ♡');

    for (const width of [1440, 768, 390, 320]) {
      await page.setViewportSize({ width, height: 844 });
      const layout = await page.evaluate(() => {
        const cards = [...document.querySelectorAll('.album-card')].map(card => card.getBoundingClientRect());
        return {
          overflow: document.documentElement.scrollWidth > innerWidth,
          cardsFit: cards.every(card => card.left >= 0 && card.right <= innerWidth),
          overlap: cards.some((a, i) => cards.slice(i + 1).some(b => Math.min(a.right, b.right) > Math.max(a.left, b.left)
            && Math.min(a.bottom, b.bottom) > Math.max(a.top, b.top)))
        };
      });
      assert.equal(layout.overflow, false, `album fits at ${width}px`);
      assert.equal(layout.cardsFit, true, `video cards stay inside the page at ${width}px`);
      assert.equal(layout.overlap, false, `video cards stay separate at ${width}px`);
    }
    await page.locator('#toggleAlbum').click();
    assert.equal(await page.locator('#toggleAlbum').getAttribute('aria-expanded'), 'false');
    assert.deepEqual(errors, []);
    console.log('PASS: all three local videos load metadata, expose playback controls, and fit the album layout at desktop and mobile widths; no page errors.');
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
