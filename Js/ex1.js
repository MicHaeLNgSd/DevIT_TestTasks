// Функція deepEqual приймає два об'єкти для порівняння
function deepEqual(obj1, obj2){
    // Використовуємо JSON.stringify для перетворення об'єктів у JSON-рядки
    // Це дозволяє нам порівнювати об'єкти на рівні значень, а не посилань
    return JSON.stringify(obj1) == JSON.stringify(obj2);
}

// Приклади використання функції deepEqual:
// Порівнюємо два об'єкти, вони ідентичні, тому результат - true
console.log(deepEqual({name: 'test'}, {name: 'test'}))

// Порівнюємо два об'єкти, вони мають різні значення властивості "name", результат - false
console.log(deepEqual({name: 'test'}, {name: 'test1'}))

// Порівнюємо два об'єкти, вони мають вкладені об'єкти, але їхні значення відрізняються, результат - false
console.log(deepEqual({name: 'test', data: {value: 1}}, {name: 'test', data: {value: 2}}))

// Порівнюємо два об'єкти, один з них має додаткову властивість "age", результат - false
console.log(deepEqual({name: 'test'}, {name: 'test', age: 10}))