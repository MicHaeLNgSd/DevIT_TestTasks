// Функція deepEqual приймає два об'єкти і порівнює їх
function deepEqual(obj1, obj2){
    // Використано JSON.stringify для перетворення об'єктів у JSON-рядки
    // Це дозволяє порівнювати об'єкти на рівні значень, а не посилань
    return JSON.stringify(obj1) == JSON.stringify(obj2);
}

// Приклади використання функції deepEqual:
console.log(deepEqual({name: 'test'}, {name: 'test'})) // Об'єкти ідентичні, тому результат - true 
console.log(deepEqual({name: 'test'}, {name: 'test1'})) // Об'єкти мають різні значення властивості "name", результат - false
console.log(deepEqual({name: 'test', data: {value: 1}}, {name: 'test', data: {value: 2}})) // Об'єкти мають вкладені об'єкти, значення яких відрізняються, результат - false
console.log(deepEqual({name: 'test'}, {name: 'test', age: 10})) // Об'єкти різні, один з них має додаткову властивість "age", результат - false