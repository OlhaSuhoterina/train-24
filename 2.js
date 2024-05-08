console.log("Завдання: 2 ==============================");

// Створюємо функцію task2
function task2() {
  const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "Проміс 1 виконано");
  });
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, "Проміс 2 виконано");
  });
  // Створюємо функцію promise1
  // Повертаємо новий проміс
  // Використовуємо setTimeout для імітації асинхронної операції, яка завершується через 2 секунди.
  // Після 2 секунд викликаємо resolve з результатом проміса, який є рядком "Проміс 1 виконано"
  // Створюємо функцію promise2
  // Повертаємо новий проміс
  // Використовуємо setTimeout для імітації асинхронної операції, яка завершується через 5 секунди.
  // Після 5 секунд викликаємо resolve з результатом проміса, який є рядком "Проміс 2 виконано"

  Promise.race([promise1, promise2])
    .then((value) => {
      console.log(value);
    })

    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log(`Завдання 2 завершено`);
    });
  // Використовуємо Promise.race для визначення, який проміс виконується першим.
  // Метод повертає новий проміс, який вирішується або відхиляється негайно після розв'язання або відхилення будь-якого з промісів у переданому списку.
  // У разі успіху виводимо результат
  // У разі помилки виводимо повідомлення про помилку
  // Незалежно від результату, виводимо повідомлення про завершення обробки промісів, який є рядом "Завдання 2 завершено"
}

// Викликаємо функцію task2
task2();
