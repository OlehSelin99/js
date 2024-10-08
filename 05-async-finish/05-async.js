// Event Loop

// const timeout = setTimeout(() => {
//   console.log("after 2 seconds");
// }, 2000);

// clearTimeout(timeout)

// setTimeout(() => {
//   console.log("after 3 seconds");
// }, 3000);

// let count = 0;
// setInterval(() => {
//   console.log("tick", ++count);
// }, 1000);

// delay(() => {
//   console.log("timeout");
// }, 2000);

const delay = (time = 1000) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([1, 2, 3]);
      reject("Error in delay");
    }, time);
  });
  return promise;
};

// function delay(callback, time) {
//   setTimeout(callback, time);
// }

// delay()
//   .then((data) => {
//     console.log("Timeout", data);
//     return data.map((x) => x ** 2);
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => console.log("Finally"));

const getData = () => new Promise((resolve) => resolve([1, 2, 3]));

// getData().then((array) => console.log(array));

async function asyncExample() {
  try {
    await delay(2000);
    const data = await getData();
    console.log(data);
  } catch (err) {
    console.log(err);
  } finally {
    console.log("Finally");
  }
}

asyncExample();
