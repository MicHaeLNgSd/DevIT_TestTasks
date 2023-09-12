// Створюється функція arrayToObject, яка перетворює вкладений масив в об'єкт
function arrayToObject(arr) {
  // Створює порожній об'єкт, для зберігання результату
  var obj = {};

  // Проходить циклом по елементам вхідного масиву arr
  for (var i = 0; i < arr.length; i++) {
    // Отримує ключ та значення з поточного підмасиву
    var key = arr[i][0];
    var value = arr[i][1];

    // Перевіряє, чи значення є масивом
    if (Array.isArray(value)) {
      // Якщо значення є масивом, рекурсивно викликає функцію arrayToObject для перетворення цього масиву в об'єкт
      value = arrayToObject(value);
    }

    // Додає пару ключ-значення до об'єкта obj
    obj[key] = value;
  }

  // Повертає готовий об'єкт
  return obj;
}

// Створює вхідний масив arr, який містить вкладені підмасиви зі змінними типами даних
var arr = [['name', 'developer'], ['age', 5], ['skills', [['html', 4], ['css', 5], ['js', 5]]]];

// Викликає функцію arrayToObject для перетворення вхідного масиву в об'єкт
var result = arrayToObject(arr);

// Виводе результат в консоль
console.log(result);


//Результат {
//   name: "developer",
//   age: 5,
//   skills: {
//     html: 4,
//     css: 5,
//     js: 5
//   }
//};
