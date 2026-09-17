# Tổng hợp kiến thức lesson-01
## 1. Chạy test đầu tiên với playwright:
Tạo folder K25/Demo-1 --> chuột phải tại path bar-> open terminal:
Nhập lệnh **npm init playwright@latest** và làm theo hướng dẫn.
Mở folder vừa tạo trong VS code: 
```Mở VS code-> file-> open folder-> chọn folder```
## 2.Tạo SSH key, đưa code lên GitHub
Các bước để đẩy code:

``` 1. sinh SSH key```
Lệnh tạo ssh keys:

**ssh-keygen -t rsa -b4096 -C"your_email@example.com"**

Lệnh đọc nội dung file:

**cat~/.ssh/id_rsa.pub** 


```2. copy public key-> dán vào GitHub```

Mở GitHub-> chọn profile-> settings-> Chọn SSH &GPG Keys-> New SSH key -> Paste key vào ô key và title đặt tên dễ nhớ

```3. Đưa code lên GitHub```

Vào GitHub--> chọn ```+```--> new repository-> nhập tên repository--> create repository. Tạo thành công chọn ```SSH``` copy link

Mở VS code tab terminal nhập lần lượt các lệnh
```git init```

```git remote add origin "paste link"```

```git add .```

```git commit -m"init project"```

```git push origin main```


