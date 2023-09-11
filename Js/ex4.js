// Створюємо функцію arrayToObject, яка перетворює вкладений масив в об'єкт.
function arrayToObject(arr) {
  // Ініціалізуємо порожній об'єкт, в якому будемо зберігати результат.
  var obj = {};

  // Проходимося циклом по елементам вхідного масиву arr.
  for (var i = 0; i < arr.length; i++) {
    // Отримуємо ключ і значення з поточного підмасиву.
    var key = arr[i][0];
    var value = arr[i][1];

    // Перевіряємо, чи значення є масивом.
    if (Array.isArray(value)) {
      // Якщо значення є масивом, рекурсивно викликаємо функцію arrayToObject
      // для перетворення цього масиву в об'єкт.
      value = arrayToObject(value);
    }

    // Додаємо пару ключ-значення до об'єкта obj.
    obj[key] = value;
  }

  // Повертаємо готовий об'єкт.
  return obj;
}

// Створюємо вхідний масив arr, який містить вкладені підмасиви зі змінними типами даних.
var arr = [['name', 'developer'], ['age', 5], ['skills', [['html', 4], ['css', 5], ['js', 5]]]];

// Викликаємо функцію arrayToObject для перетворення вхідного масиву в об'єкт.
var result = arrayToObject(arr);

// Виводимо результат в консоль.
console.log(result);

// const obj = {
//   name: "developer",
//   age: 5,
//   skills: {
//     html: 4,
//     css: 5,
//     js: 5
//   }
// };
