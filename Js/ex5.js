// Функція objectToArray призначена для перетворення об'єкта в масив масивів, де кожен підмасив містить пару ключ-значення.
function objectToArray(obj) {
  // Створюємо порожній масив, в який будемо зберігати пари ключ-значення.
  var arr = [];

  // Ітеруємося по ключах об'єкта obj за допомогою циклу for...in.
  for (var key in obj) {
    // Отримуємо значення для поточного ключа.
    var value = obj[key];

    // Перевіряємо, чи це значення є об'єктом, але не масивом.
    if (typeof value === 'object' && !Array.isArray(value)) {
      // Якщо значення - об'єкт, викликаємо рекурсивно функцію objectToArray для перетворення вкладеного об'єкта у масив масивів.
      value = objectToArray(value);
    }

    // Додаємо пару ключ-значення у масив arr.
    arr.push([key, value]);
  }

  // Повертаємо сформований масив arr.
  return arr;
}

// Створюємо об'єкт obj, який містить дані.
const obj = {
  name: "developer",
  age: 5,
  skills: {
    html: 4,
    css: 5,
    js: 5
  }
};

// Викликаємо функцію objectToArray для об'єкта obj і отримуємо результат.
const result = objectToArray(obj);

// Виводимо у консоль результат у вигляді рядка JSON за допомогою JSON.stringify, бо консоль не може виводити вкладені масиви.
console.log(JSON.stringify(result));

// Результат виглядає так: [['name', 'developer'], ['age', 5], ['skills', [['html', 4], ['css', 5], ['js', 5]]]].