let navigatorName = "Luffy";
let currentHakiLevel = 3;
const islandA = 15;
const isLandB = 25;
const isLandC = 40;
//Tính tổng lượng thịt tiêu thu của 3 đảo:
const sumMeat = islandA + isLandB +isLandC;
console.log("Tổng lượng thịt tiêu thụ: " +sumMeat);
// Tính trung bình:
const everageMeat = sumMeat/3;
console.log("Trung bình tiêu thụ: " +everageMeat)
//in ra lượng thịt còn dư sau khi chia 
console.log("lượng thịt còn dư sau khi chia 3 thành viên cốt cán: " + sumMeat%3)