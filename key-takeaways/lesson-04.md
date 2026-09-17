# Tổng hợp kiến thức lesson-04
## 1. JavaScrip_Object
Object là kiểu DL lưu trữ 1 tập hợp các ``` key-value``
### 1.1 cách khai báo:
- *Cách 1*: Object literal (phổ biến)
```javascript
 let sinhVien = {
    hoTen: "Thuy",
    tuoi:18,
    lop: "playwright"
};
```
- *Cách 2*: Dùng new object
```javascript
Let xe = new object();
xe.hangXe = "toyota";
xe.mau = "Trắng"
```

### 1.2 Quy Tắc đặt tên key
- key là string hơph lệ (không có dấu cách, không có kí tự đặc biệt): không cần đặt trong dấu "". 
- Ngược lại bắt buộc  đặt trong ""

VD:
```javascript
let person ={"full Name": "Nguyen Van A", age: 25}
```

### 1.3 Truy xuất dữ liệu trong Object**
*Cách 1*: Dot notation (dấu chấm)

VD: 

`Console.log(singVien.hoTen);`

*Cách 2*: Bracket notation (dấu [])

VD:

`console.log(sinhVien[hoTen]);`

### 1.4 Gán giá trị cho Object, thêm, sửa, xoá thuộc tính

VD có 1 object:
 ``` javascript
 let sinhVien = {hoTen: "Lan", tuoi: 22}
 ```

 **Sửa giá trị:**
 ```javascript
 sinhVien.tuoi = 23      
 console.log(sinhvien.tuoi); //23
 ```

 **Thêm key mới** : chưa tồn tại tự tạo mới
 ```javascript
 sinhVien.email = "thuy@gmail.com";
 
 console.log(sinhVien); //{hoten: "Lan", tuoi:23, email: "thuy@gmail.com"}
```

**Xoá thuộc tính**
```javascript
delete sinhVien.email
Console.log(sinhvien); //{hoTen: "Lan", tuoi:23}
```
**Object lồng**
```javascript
let sinhVien = {
    hoTen: "Lan", 
    tuoi:23, 
    diaChi:{
        soNha: 15, 
        duong: "Phú Đô", 
        thanhPho: "Hà Nội"
        }
        };
```

> Note: Chỉ nên lồng <=3 object
## 2. Javascrip Array
Có 2 cách khai báo array:
- Cách 1:
```javascript
let sinhVien =[];
```
```javascrip
const diem =[10,9,8,7,5];
```

- Cách 2:
```javascript
const diem =new array (10,9,8,7,5);
```
> *Lưu ý*: index của array bắt đầu từ 0

*** Đếm số phần tử***
```javascript
console.log(diem.lenght);//5
```

**Lấy phần tử cuối cùng**
```javascript
let cuoi =diem[diem.lenght-1];
console.log(cuoi); //5
```
**Lấy 1 phần tử của mảng**
```javascript
console.log(diem[2]); //9
```
**Sửa:
```javascript
const diem =[10,9,8,7,5];
diem[4] = 5 //thay điểm tại index số 4 bằng 5
```
**Thêm, xoá phần tử**
- Thêm vào cuối mảng: .push()
- Thêm vào đầu mảng: .unshift()
- Xoá phần tử cuối mảng: .pop()
- Xoá phần tử đầu: shift();

Ví dụ:
```javascript
let monHoc = ["Toán", "Lý"];
monHoc.push("Hoá");
Console.log(monHoc); //["Toán", "Lý", "Hoá"]
monHoc.unshift("Văn");
Console.log(monHoc); //["Văn","Toán", "Lý", "Hoá"]
monHoc.pop();
Console.log(monHoc); //["Văn","Toán", "Lý"]
monHoc.shift(); /["Toán", "Lý"]
```
## 3.Javascript - Function:
**Khai báo**
```javascript
function tenHam(){
    //code
}
```
**gọi hàm**
```javascript
tenHam();
```
**Quy tắc đặt tên hàm**
-Dùng camelCase: chữ cái đầu viết thường, các chữ sau viết hoa chữ cái đầu. viết liền các chữ.

**Hàm với tham số**
```javascript
function chao(ten){
    console.log("xin chào" + ten + "!");
}
Chao("Lan");//xin chào Lan!
```

>***Phân biệt parameter vs argument***
- Parameter(tham số): biến giữ chỗ khi khai báo.

- Argument (đối số): giá trị thật khi gọi.
> VD trên: ten là parameter, "Lan"là argument.
## 4.Javascript array unils function
### 4.1 Hàm Map
Tạo mảng mới bằng cách áp dụng 1 hàm lên từng phần tử của mảng gốc. Trả về mảng mới có cùng độ dài
```javascript
const number = [1,2,3,7,9];
const double = number.map(num=>num*2)
console.log(double);//[2,4,6,14,18]
```
### 4.2 Hàm Filter
Tạo mảng mới chỉ chứa các faanf tử thoả mãn đk trong hàm callback. Trả về mảng đã được lọc
VD:
```javascript
const numbers =[1,2,3,4,5,6,7,8,9,10];
const evenNumber= numbers.filter(num=>num%2===0);
console.log(evenNumber); //[2,4,6,8,10]
```
### 4.3 Hàm find
- Tìm và trả về fần tử đầu tiên trong mảng thoả mãn đk. 
- trả về undifine nếu không tìm thấy.
VD:
```javascript
const numbers =[1,2,3,4,5,6,7,8,9,10];
//Tìm số chẵn đầu tiên:
const firstEven = numbers.find(num=>num%2===0)
console.log(firstEven); //2
```
### 4.4 Hàm reduce
Duyệt qua mảng và tích luỹ các phần tử thành 1 giá trị duy nhất (số/chuỗi/object) dựa trên hàm callback
VD:
```javascript
const numbers =[1,2,3,4,5];
const sum= numbers.reduce((sum, current)=>{
    console.log(`sum: ${sum}, current: ${current}`),
    return sum= sum + current;
},0)
console.log(sum); //15
```
###4.4 Hàm some
- Kiểm tra xem có ít nhất 1 phần tử trong mảng thoả mãn đk hay không.
- Trả về True/False
> Dừng ngay khi tìm thấy 

VD:
```javascript
const numbers= [1,2,3,4,5];
//Kiểm tra xem có số chẵn hay không?
const hasEven = numbers.some(num=> num%2===0);
console.log(hasEven); //True
```
### 4.5 Hàm every:
- Tương tự hàm some nhưng kiểm tra tất cả các phần tử trong mảng
- Dừng ngay khi gặp false.

### 4.6 Sort
Sắp xếp mặc định alphabet tăng dần ---> thay đổi mảng gốc

***Sort số:***
- Sort((a,b) => a-b); //tăng dần=
- sort((a,b) => b-a); //giảm dần


