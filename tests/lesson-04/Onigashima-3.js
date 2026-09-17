//Đếm và in ra có bao nhiêu cặp số nguyên dương (a,b) từ 1 tới 100 sao cho tích của chúng chia hết cho 19
let count = 0;
for (let a = 1; a <= 100; a++) {
    for (let b = a; b <= 100; b++) {
        if ((a * b) % 19 === 0){
            count++;
        }
    }
}
console.log("số cặp số thoả mãn là: " +count)