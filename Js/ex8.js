// 8. Напишите функцию combos, которая принимает положительное целое число num и 
// возвращает массив массивов положительных целых чисел, где сумма каждого массива равна  num.  
// Массивы не должны повторяться.

// Функція combos, яка повертає масив масивів позитивних цілих чисел, сумма кожного масива дорівнює num. Масиви не повторюються
function combos(num) {
    // Внутрішня функція для перебору комбінацій за допомогою рекурсії
    function nestedcombos(start, remaining, currentArr) {
      // Якщо залишилось 0, знайдено правильну комбінацію
      if (remaining === 0) {
        // Додає копію поточної комбінації до результату
        result.push([...currentArr]);
        return;
      }
  
      // Перебирає числа від 'start' до 'remaining'
      for (let i = start; i <= remaining; i++) {
        // Додає 'i' до поточної комбінації (перебираємо останню цифру, коли ми в останній комірці)
        currentArr.push(i);
  
        // Рекурсивно викликає функцію зі зменшеним залишком та теперішньою комбінацією
        nestedcombos(i, remaining - i, currentArr);
  
        // Крок назад (видаляє останній елемент для наступної ітерації із новою попередньою цифрою)
        currentArr.pop();
      }
    }
  
    const result = []; // Створює порожній масив, для зберігання результату
    nestedcombos(1, num, []); // Початок рекурсивного перебору комбінацій (зі стартовими значеннями)
    return result; // Повертає масив результатів
}


console.log(combos(3)); // Виводить всі комбінації, які додаються до 3
console.log(combos(10)); // Виводить всі комбінації, які додаються до 10

//Результат:
// combos(3);
// // Output: 
// [
//   [ 1, 1, 1 ],
//   [ 1, 2 ],
//   [ 3 ]
// ]

// combos(10); 
// // Output: 
// [ 
//   [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
//   [ 1, 1, 1, 1, 1, 1, 1, 1, 2 ],
//   [ 1, 1, 1, 1, 1, 1, 1, 3 ],
//   [ 1, 1, 1, 1, 1, 1, 4 ],
//   [ 1, 1, 1, 1, 1, 5 ],
//   [ 1, 1, 1, 1, 6 ],
//   [ 1, 1, 1, 7 ],
//   [ 1, 1, 8 ],
//   [ 1, 9 ],
//   [ 1, 1, 1, 1, 1, 1, 2, 2 ],
//   [ 1, 1, 1, 1, 1, 2, 3 ],
//   [ 1, 1, 1, 1, 2, 4 ],
//   [ 1, 1, 1, 1, 2, 2, 2 ],
//   [ 1, 1, 1, 1, 3, 3 ],
//   [ 1, 1, 1, 2, 5 ],
//   [ 1, 1, 1, 2, 2, 3 ],
//   [ 1, 1, 1, 3, 4 ],
//   [ 1, 1, 2, 6 ],
//   [ 1, 1, 2, 2, 4 ],
//   [ 1, 1, 2, 2, 2, 2 ],
//   [ 1, 1, 2, 3, 3 ],
//   [ 1, 1, 3, 5 ],
//   [ 1, 1, 4, 4 ],
//   [ 1, 2, 7 ],
//   [ 1, 2, 2, 5 ],
//   [ 1, 2, 2, 2, 3 ],
//   [ 1, 2, 3, 4 ],
//   [ 1, 3, 6 ],
//   [ 1, 3, 3, 3 ],
//   [ 1, 4, 5 ],
//   [ 2, 8 ],
//   [ 2, 2, 6 ],
//   [ 2, 2, 2, 4 ],
//   [ 2, 2, 2, 2, 2 ],
//   [ 2, 2, 3, 3 ],
//   [ 2, 3, 5 ],
//   [ 2, 4, 4 ],
//   [ 3, 7 ],
//   [ 3, 3, 4 ],
//   [ 4, 6 ],
//   [ 5, 5 ],
//   [ 10 ]
// ]
