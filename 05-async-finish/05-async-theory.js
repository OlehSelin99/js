// console.log('Початок');

// function longRunningTask() {
//     // Синхронний код, що імітує тривалу операцію
//     const start = Date.now();
//     while (Date.now() - start < 3000) {} // Блокує потік на 3 секунди
// }

// longRunningTask();

// console.log('Кінець');

// console.log('Початок');

// setTimeout(() => {
//     console.log('Асинхронна операція завершена');
// }, 3000);

// console.log('Кінець');

// function delay(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then(response => response.json())
//   .then(data => {
//       console.log('Отримані дані:', data);
//       return delay(2000); // Затримка на 2 секунди перед наступним then
//   })
//   .then(() => {
//       console.log('Це повідомлення з`явиться через 2 секунди після отримання даних');
//   })
//   .catch(error => {
//       console.error('Сталася помилка:', error);
//   });
