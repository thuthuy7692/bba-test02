# Tổng hợp kiến thức lesson -03
## 1. Git - unstage

 git restore --staged .  (//Chuyển toàn bộ file từ vùng ```staging```->  ```vùng working```)
 git restore --staged file1 file2  (//Chuyển file 1, file2 từ vùng ```staging``` -> ```working```)

 ## 2. Git un-commit

 Thay đổi **commit mới nhất** bằng lệnh:

 ```git commit --amend -m"<message mới>"```

 ## 3. Câu điều kiện

 **if(điều kiện)**{

      //code

    }

## 4. JavaScrip Vòng lặp:

 ` for(<điều kiện khởi tạo>; <đk lặp>; <cập nhật>){
    //code
 }`

 trong đó:
 - ĐK khởi tạo: chạy 1 lần duy nhất khi vòng lặp bắt đầu;
 - Đk lặp: nếu đúng thì chạy tiếp sai thì dừng
 - Cập nhật: Chạy vào cuối mỗi vòng lặp-> thay đổi giá trị của biến đếm.
 ## 5. Conventions:
 | snake_case | kebab -case | camelCase | PascalCase | UPER_CASE |
 | ---------- | ----------- | --------- | ---------- | --------- |
 |Tất cả chữ cái viết thường| Tất cả chữ cái viết thường | Chữ cái đầu viết thường, các chữ sau viết hoa chữ đầu| tất cả chữ cái đầu viết hoa| Tất cả các chữ cái viết hoa|
  |Cách nhau bở dấu gạch dưới| cách nhau bởi gạch ngang| Viết liền |Viết liền | Cách nhau bở dấu gạch dưới|
|Ví dụ: thuy_ly| VD: thuy-ly| thuyLy |ThuyLy| THUY_LY
|
