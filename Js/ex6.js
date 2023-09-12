function NotificationException() {}
function ErrorException() {}

function primitiveMultiply(a, b) {
  const rand = Math.random();
  if (rand < 0.5) {
    return a * b;
  } else if(rand > 0.85) {
    throw new ErrorException()
  } else {
    throw new NotificationException()
  }
}

// Функція reliableMultiply використовує функцію primitiveMultiply, але обробляє можливі помилки
function reliableMultiply(a, b) {
  try {
    // Викликає функцію primitiveMultiply
    return primitiveMultiply(a, b);
  } 
  catch (err) {
    // Обробляє помилки, які можуть бути викинуті
    if (err instanceof NotificationException) {
      // Якщо помилка є NotificationException, виводе повідомлення та спробуємо знову
      console.log('NotificationException. Try again');
      return reliableMultiply(a, b);
    } 
    else if (err instanceof ErrorException) {
      // Якщо помилка є ErrorException, виводе повідомлення та завершуємо виконання
      console.log('ErrorException. Stop');
      return err;
    } 
    else {
      // Якщо помилка не відома, виводе повідомлення про не визначену помилку
      console.log('Undefined Error');
      return err;
    }
  }
}

console.log(reliableMultiply(8, 8));