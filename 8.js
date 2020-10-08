function getRandom() {
  return Math.floor(Math.random() * Math.floor(2));
}

var promise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    if (getRandom()) {
      reject("We are all going to fuck!");
    } else {
      resolve("Hello, World!");
    }
  }, 1000);
  console.log(`#: Finish promise`);
});

promise.then(data => console.log(`#: ${data}`))
  .catch(error => console.error(`#: ${error}`))
  .finally(() => console.log(`#: We finally?`));