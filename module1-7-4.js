// let numbers = [10, 4, 100, -5, 54, 2]
// let sum = 0;

// // Через цикл for
// for (let i = 0; i < numbers.length; i += 1) {
//     numbers[i] = numbers[i] ** 3;
//     sum += numbers[i];
// } 
// console.log(sum); // 1158411

// // Через цикл for of
// sum = 0;
// for (let num of numbers) {
//     num = num ** 3; // я не понимаю почему эта строка делает num таким огромным числом. Получается что возводит в 3 стеерь и резудьтат в третью степень еще раз 
//     sum += bum;
//     console.log(num, `num`);
//     console.log(sum, `sum`);
// } 

// console.log(sum); // 1003904306910622800

// исправленный код 
let numbers = [10, 4, 100, -5, 54, 2]
let sum = 0;

// Через цикл for
for (let i = 0; i < numbers.length; i += 1) {
    numbers[i] = numbers[i] ** 3;
    sum += numbers[i];
    console.log(numbers); 
} 
console.log(sum); // 1158411

// Через цикл for of
sum = 0;
for (let num of numbers){
    num ** 3;
    sum += num;
    console.log(num);
} 
console.log(sum); // 1158411 

