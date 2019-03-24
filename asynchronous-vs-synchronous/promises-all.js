const a = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("operation 1...");
    reject(new Error("Wrong ...."));
  }, 2000);
});
const b = new Promise(resolve => {
  setTimeout(() => {
    console.log("operation 2...");
    resolve(2);
  }, 2000);
});
Promise.all([a, b])
  .then(result => console.log(result))
  .catch(err => console.log("Error", err.message));
