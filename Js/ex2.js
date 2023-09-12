// Генераторна функція chunkArray розділяє вхідний масив на підмасиви заданого розміру (chunkSize)
function* chunkArray(array, chunkSize) {
    // Цикл for ітерується через масив array з кроком chunkSize
    for (let i = 0; i < array.length; i += chunkSize) {
        // У кожній ітерації генератор створює новий підмасив, використовуючи метод slice,
        // який вказує, з якого по який індекси включно обирати елементи
        yield array.slice(i, i + chunkSize);
    }
}

// Ітератор для функції chunkArray, у який передано вхідний масив та розмір підмасивів
const iterator = chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3);

// Результати викликів методу next() ітератора:
console.log(iterator.next()) // { value: [1, 2, 3], done: false }
console.log(iterator.next()) // { value: [4, 5, 6], done: false }
console.log(iterator.next()) // { value: [7, 8], done: false }
console.log(iterator.next()) // { value: undefined, done: true } //(ітерація завершена)