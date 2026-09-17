# Tổng hợp kiến thức Lesson 2
## 1. Tổng quan về git
**Git init** (// Tạo ra 3 vùng : ``` working ```   ```Staging```   ```Repository```
Toàn bộ các file lúc này sẽ nằm trong vùng working.

**Git add file 1**: Đưa file 1 từ vùng ```working``` ---> sang ```Stasing```

**Git add . **  đưa toàn bộ file từ vùng ```working``` --->sang ``` staging```

**Git commit -m"message": đưa file từ vùng ```staging``` --->```Repository```.
## 2. Kiểm tra trạng thái:
**git status** :
File màu đỏ là nằm trong vùng working
File mày xanh nằm trong vùng staging
File đã commit-> goc lệnh git status không thấy file đó nữa
## 3. Xem list commits bằng lệnh: Git log:
1 commit sẽ có các thông tin sau:
- ID
- Author
- Date
- Commit n: Tên commit.
*Lưu ý*: Commit sau sẽ ở trên, commit trước sẽ ở dưới.

## 4. Git config:
Lệnh:
Git config --global user.name "Tên bạn"
Git config --global user.email"Email của bạn"

--> Set global: set cho toàn bộ máy, toàn bộ các repo. 
--> Nếu muốn set riêng cho 1 repo user name, mail khác thì dùng lênh:
- Git config ser.name "Tên bạn"
- Git config user.email"Email của bạn"

** lệnh liệt kê toàn bộ config**
Git config --list
 ## 5. Git commit convention:
 <Type>: <Short_description>
Type có 3 loại: 
- Chore:sửa nhỏ lẻ, chính tả, xoá file không dùng,..
- Feat: Thêm tính năng, thêm TC mới,...
- Fix: Sửa lỗi 1 test trước đó,...

*Ví dụ: git commit -m"feat: add code for PDR_003"

## JavaScrip:
```Javascript``` --> ```Ngôn ngữ máy```---> Màn hình.

Vd: ```Console.log("Hello, world!")``` ---> ```Node tên file```---> ```Hello, world```

`Nếu file nằm trong thư mục-> Ngôn ngữ máy: Lệnh chạy phải có đường dẫn tới file: Node TM1/01-hello.Js`

## 6. Biến và Hằng
Khai báo biến:
Let <Tên biến> = <giá trị>;
Hằng:
Const myName = "Thuy"

*Làm sao để biết 1 biến có kiểu gì`: 
- Xem code phần khai báo.
- Dùng hàm: type of <valiable>

## 7. Toán tử logic:
| logic && | Kết quả |
| --- |---|
| True && false | False |
| True && true | True|
|false && true | False|
|false && false | False|


| Logic Hoặc | Kết quả|
| ---| ---|
| True or false | True |
| True or true | True|
|false or true | true|
|false or false | False|
 ## 8. Toán tử một ngôi
 Prefix: Tăng trước trả về sau:
 ++x  //x=x+1
 --x  // x=x-1
 Postfix: Trả về trước, tăng sau:
 x++
 x--
 VD:
 Let x=100;
 console.log(++x) // 101
 console.log(x) //101
 console.log(--x) //100
 console.log(x--) //100
 console.log(x) // 100


