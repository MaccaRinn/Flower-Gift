# Một bó hoa dành tặng em bé của anh · 20/10

Trang tặng hoa, album video kỷ niệm và thiệp chúc mừng ngày Phụ nữ Việt Nam 20/10, dùng HTML, CSS và JavaScript thuần. Hoạt động offline, không cần cài thư viện hoặc build.

## Chạy

Mở `index.html` trực tiếp trong trình duyệt, hoặc chạy từ thư mục này:

```bash
python3 -m http.server 8080
```

Truy cập http://localhost:8080.

## Trang vườn hoa mới

Mở `garden.html` trực tiếp trong trình duyệt, chọn **Ngắm vườn hoa** ở góc trên bên phải trang `index.html`, hoặc truy cập http://localhost:8080/garden.html khi chạy server ở trên. Trang hoạt động offline; khi sao chép sang nơi khác, chép kèm `garden-botany.js`, `garden-card.js` và thư mục `assets`.

- Ban đầu chỉ có một bông hoa giữa màn hình. Bấm vào hoa (hoặc dùng Tab rồi Enter/Space) để cả vườn hoa dần nở từ giữa ra hai bên.
- Sau khoảng 7 giây, thiệp chúc 20/10 tự hiện. Chọn **Ngắm vườn hoa**, nút × hoặc Escape để đóng thiệp.
- Chọn **Đọc lại thiệp** để mở lại, hoặc **Cho hoa nở lại** để trở về bông hoa đầu tiên.
- Chọn **Viết lời chúc riêng** trong thiệp để sửa người nhận, tiêu đề, lời chúc và chữ ký. **Lưu lời chúc** cập nhật thiệp và lưu trên trình duyệt hiện tại; **Hủy** bỏ sửa đổi chưa lưu. Lời chúc của vườn hoa được lưu riêng với thiệp ở `index.html`.
- Trang tự điều chỉnh theo màn hình và bỏ qua hoạt ảnh nở khi người xem bật chế độ giảm chuyển động.
- Hoa tulip được vẽ thành các cánh hình chuông nhọn, có lớp màu chuyển sắc, gân cánh và giọt sương. Lá có gân, thân lay theo gió, hoa nghiêng nhẹ khi rê chuột gần và có cánh hoa bay; chuyển động tạm dừng khi tab bị ẩn.
- Tulip hồng, kem được xen với tulip xanh lá nhạt, xanh dương và trắng. Nền trời xanh có mây mỏng trôi chậm; gió làm thân, lá và đầu hoa lắc lư cùng nhau.
- Có thêm 20 nụ tulip nhiều màu xen qua các lớp của khu vườn, cánh còn khép và đài xanh ôm quanh gốc nụ. Nụ xuất hiện cùng đợt hoa và giữ dáng khép khi vườn đã nở.
- Trang dùng Noto Serif (chữ đứng và nghiêng) cho tiêu đề, lời gửi và chữ ký; Noto Sans cho nội dung. Font có đầy đủ dấu tiếng Việt, được lưu tại `assets/fonts` kèm giấy phép để dùng offline. Khi sao chép trang sang nơi khác, chép kèm thư mục này.

## Trải nghiệm

- Bó hoa nở trước, sau đó xuất hiện phong bì để người xem tự mở thiệp.
- Chạm từng bông hoa để nhận một lời chúc nhỏ. Khi dùng bàn phím, Tab đến bó hoa rồi nhấn Enter, Space hoặc các phím mũi tên.
- Chọn **Mở thiệp** để đọc lời chúc; đóng bằng nút ×, phím Escape hoặc **Gấp thiệp** trên phong bì.
- Hoa và tiêu đề được căn giữa khi vào trang. Khi mở thiệp, cả cụm hoa và thiệp được cân giữa; trang tự chia cột trên màn hình rộng và xếp thiệp xuống dưới trên màn hình hẹp. Thiệp nằm trong luồng trang, nên tiêu đề, video, hoa và lời chúc không bị che; có thể tiếp tục tương tác với hoa khi thiệp mở.
- Chọn **Viết lời chúc riêng** để sửa người nhận, nội dung và chữ ký. **Lưu lời chúc** cập nhật thiệp và lưu trên trình duyệt hiện tại; **Hủy** bỏ các sửa đổi chưa lưu. Nội dung không tự gửi sang thiết bị hay trình duyệt khác.
- Chọn **Cho hoa nở lại** để xem lại hiệu ứng.
- Thiệp dài tự tăng chiều cao và cuộn cùng trang. Trang tôn trọng thiết lập giảm chuyển động và tạm dừng hoạt ảnh khi tab bị ẩn.

## Album video kỷ niệm

- Album xuất hiện sau lần đầu mở thiệp, hiện dần khi cuộn tới phần video.
- Chọn **Xem album kỷ niệm** trong thiệp để chuyển đến album.
- Ba video trong `assets` phát trực tiếp trong khung kỷ niệm; dùng nút điều khiển trên từng video để phát, tạm dừng hoặc chỉnh âm lượng.
- **Xem video** trải ba khung ra ngang trên máy tính, dọc trên điện thoại; **Ẩn video** xếp chồng lại. Video chỉ được tải metadata khi mở thiệp để trang ban đầu nhẹ hơn.
- Album vẫn giữ lại khi đóng thiệp, để em bé có thể xem video tiếp.
- Khi đổi video, cập nhật thuộc tính `src` của từng thẻ `<video>` trong `memoryAlbum` ở `index.html`. Có thể thay ảnh poster trong thuộc tính `poster`; khung video giữ tỉ lệ 3:4.

## Các tệp

- `index.html`: bố cục, Canvas, thiệp và form cá nhân hóa.
- `style.css`: nền hồng, phong bì, giấy gấp, bố cục responsive và chuyển động.
- `script.js`: vẽ bó hoa, hiệu ứng nở hoa, parallax, cánh hoa bay và tương tác từng bông.
- `card.js`: mở/đóng thiệp, chuyển bố cục, lời chúc và lưu nội dung cá nhân hóa.
- `assets/1792505081165_2070230567482948539_2346463872828108177.mp4`, `assets/1792505081221_2070230567482948539_2346463872828108177.mp4`, `assets/1792505081345_2070230567482948539_2346463872828108177.mp4`: ba video kỷ niệm.
- `assets/portrait-placeholder.webp`: poster hiển thị trước khi video phát.
- `tests/layout.cjs`: kiểm tra hồi quy bố cục trên 11 kích thước màn hình, hoa căn giữa, album video ẩn/hiện và xòe/gấp, thiệp dài và các tương tác. Chạy `node tests/layout.cjs` trong môi trường có Playwright (hoặc đặt `NODE_PATH` đến thư mục chứa Playwright đã cài).
- `tests/album.cjs`: kiểm tra ba video, metadata, điều khiển phát và bố cục album trên các kích thước màn hình. Chạy `node tests/album.cjs` với Playwright.

Đổi nội dung thiệp mặc định tại `defaultGreeting` trong `card.js`; đổi các lời chúc theo bông hoa tại `WHISPER_NOTES` trong `script.js`. Nội dung được render dưới dạng văn bản thuần.

# flowers-20-10
