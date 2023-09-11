// 8. Напишите функцию combos, которая принимает положительное целое число num и 
// возвращает массив массивов положительных целых чисел, где сумма каждого массива равна  num.  
// Массивы не должны повторяться.


function combos(num) {
    // Внутрішня функція для виконання зворотного відстеження
    function nestedcombos(start, remaining, currentArr) {
      // Якщо залишилось 0, ми знайшли дійсну комбінацію
      if (remaining === 0) {
        // Додаємо копію поточної комбінації до результату
        result.push([...currentArr]);
        return;
      }
  
      // Перебираємо числа від 'start' до 'remaining'
      for (let i = start; i <= remaining; i++) {
        // Додаємо 'i' до поточної комбінації
        currentArr.push(i);
  
        // Рекурсивно викликаємо функцію зі зменшеним залишком та оновленою комбінацією
        nestedcombos(i, remaining - i, currentArr);
  
        // Зворотній крок: видаляємо останній елемент для наступної ітерації
        currentArr.pop();
      }
    }
  
    const result = []; // Масив для зберігання результатів
    nestedcombos(1, num, []); // Початок зворотного відстеження зі стартовими значеннями
    return result; // Повертаємо масив результатів
}


console.log(combos(3)); // Виводимо всі комбінації, які додаються до 3
console.log(combos(10)); // Виводимо всі комбінації, які додаються до 10










// function combos(num){
//     function nestedcombos(start, max, currentArr){
//         for (let i = start; i + i  <= max ; i++) {
//             console.log(start, max, currentArr,resultArr)
//             currentArr.push(i)
//             nestedcombos(i+1,num, currentArr)
//             currentArr.pop()
//         }
//         if (i + i) {
//             resultArr.push(...currentArr)
//         }
//     }

//     let resultArr = [];
//     nestedcombos(1,num,[])
//     return resultArr
// }



// console.log(combos(3));
// Output: 
// [
//   [ 3 ],
//   [ 1, 1, 1 ],
//   [ 1, 2 ] 
// ]

