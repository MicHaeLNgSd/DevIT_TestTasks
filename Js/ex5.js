// Створюється функція arrayToObject, яка перетворює об'єкт в масив масивів
function objectToArray(obj) {
  // Створює порожній масив, для зберігання результату
  var arr = [];

  // Ітерує по ключах об'єкта obj за допомогою циклу for...in
  for (var key in obj) {
    // Отримує значення для поточного ключа
    var value = obj[key];

    // Перевіряє, чи це значення є об'єктом, та не є масивом
    if (typeof value === 'object' && !Array.isArray(value)) {
      // Якщо він саме об'єкт, рекурсивно викликаємо функцію objectToArray для перетворення вкладеного об'єкта у масив масивів
      value = objectToArray(value);
    }

    // Додає пару ключ-значення у масив arr
    arr.push([key, value]);
  }

  // Повертає сформований масив arr
  return arr;
}

// Створює об'єкт obj, який містить дані
const obj = {
  name: "developer",
  age: 5,
  skills: {
    html: 4,
    css: 5,
    js: 5
  }
};

// Викликає функцію objectToArray для об'єкта obj та отримуємо результат
const result = objectToArray(obj);

// Виводимо у консоль результат у вигляді рядка JSON за допомогою JSON.stringify, бо консоль не може виводити вкладені масиви
console.log(JSON.stringify(result));

// Результат: [['name', 'developer'], ['age', 5], ['skills', [['html', 4], ['css', 5], ['js', 5]]]]