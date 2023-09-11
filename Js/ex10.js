function add(x) {
    // Внутри этой функции будет храниться текущая сумма
    const innerAdd = (y) => add(x + y);

    // Переопределяем метод valueOf, чтобы при преобразовании к числу возвращалась текущая сумма
    innerAdd.valueOf = () => x;

    return innerAdd;
}


// Примеры использования:
console.log(Number(add(1)(2)));           // 3
console.log(Number(add(1)(2)(5)));        // 8
console.log(Number(add(1)(2)(-3)(4)));    // 4
console.log(Number(add(1)(2)(3)(4)(-5))); // 5