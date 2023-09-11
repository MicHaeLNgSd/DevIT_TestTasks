// 8. Напишите функцию combos, которая принимает положительное целое число num и 
// возвращает массив массивов положительных целых чисел, где сумма каждого массива равна  num.  
// Массивы не должны повторяться.

function combos(num){
  function nestedcombos(start, max, currentArr){
      for (let i = start; i + i  <= max ; i++) {
          console.log(start, max, currentArr,resultArr)
          currentArr.push(i)
          nestedcombos(i+1,num, currentArr)
          currentArr.pop()
      }
      if (i + i) {
          resultArr.push(...currentArr)
      }
  }

  let resultArr = [];
  nestedcombos(1,num,[])
  return resultArr
}



console.log(combos(3));
// Output: 
// [
//   [ 3 ],
//   [ 1, 1, 1 ],
//   [ 1, 2 ] 
// ]