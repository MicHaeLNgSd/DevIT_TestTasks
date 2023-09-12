//Напишите функцию обертку, которая на вход принимает массив функций и их параметров, 
//а возвращает массив результатов их выполнения. Количество аргументов 
//TODO исполняемой функции не ограничено!

// Асинхронна функція bulkRun, яка приймає масив масивів, кожен з яких містить функцію та її аргументи
// Функція повертає масив результатів виконання цих функцій
async function bulkRun(functionsAndArgs) {
  // Масив для зберігання результатів
  const results = [];

  // Ітеруємося через кожну пару [функція, аргументи] у масиві functionsAndArgs
  for (const [func, args] of functionsAndArgs) {
    // Promise очікує завершення виконання функції 
    await new Promise((resolve) => {
      // Викликається функція з аргументами та callback-функцією
      func(...args, (data) => {
        // Додається результат виконання функції до масиву результатів
        results.push(data);
        // Викликаємо resolve, щоб визначити, що завдання завершилося
        resolve();
      });
    });
  }

  // Повертається масив результатів
  return results;
}

// Створюємо три функції f1, f2, f3, кожна з яких має callback-функцію
const f1 = (cb) => { cb(1) };
const f2 = (a, cb) => { cb(a) };
const f3 = (a, b, cb) => { setTimeout(() => cb([a, b]), 1000) };

// Викликаємо функцію bulkRun, передаючи масив пар [функція, аргументи] для виконання
bulkRun([
  [f1, []],           // Викликаємо f1 без аргументів, передаючи 1 в якості результату
  [f2, [2]],          // Викликаємо f2 з аргументом 2, передаючи 2 в якості результату
  [f3, [3, 4]]        // Викликаємо f3 з аргументами 3 та 4, результат повернеться через 1 секунду
]).then(console.log); // Після виводимо результати в консоль. (Очікуємо: [1, 2, [3, 4]])