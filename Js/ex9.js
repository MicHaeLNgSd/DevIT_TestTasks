function add(num) {
  // Оголошення функції sum, яка приймає аргумент nextNum
  const sum = (nextNum) => add(num + nextNum);
  
  // Перевизначення методу valueOf, щоб повертати поточне значення num
  sum.valueOf = () => num;

  // Повернення функції sum
  return sum;
}
  
// Приклади викликів функції add і виведення результатів
console.log(Number(add(1)(2)));        // 3
console.log(Number(add(1)(2)(5)));     // 8
console.log(Number(add(1)(2)(-3)(4)));  // 4
console.log(Number(add(1)(2)(3)(4)(-5)));// 5


// function add(num) {
//   let sum = num;

//   function innerAdd(nextNum) {
//     sum += nextNum;
//     return innerAdd;
//   }

//   innerAdd.valueOf = function() {
//     return sum;
//   } 

//   return innerAdd;Js
// }