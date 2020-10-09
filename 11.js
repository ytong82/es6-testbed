var fs = require('fs');

/*
var readFile = function(fileName) {
  return new Promise(function(resolve, reject) {
    fs.readFile(fileName, function(error, data) {
      console.log("Come Here!");
      if (error) {
        console.error(error);
        reject(error);
      }
      console.log(data);
      resolve(data);
    });
  });
};*/

function helloWorld() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //reject("Goodbye!");
      resolve("Hello World!");
    }, 20000);
  });
};

function* gen2() {
  yield helloWorld();
  yield helloWorld();
}

var g2 = gen2();

/*
var g = function* gen() {
  var f1 = yield readFile('./fs/foo').then((data) => data).catch((error) => error);
  var f2 = yield readFile('./fs/bar').then((data) => data).catch((error) => error);
  console.log(f1);
  console.log(f2);
  console.log(f1.toString());
  console.log(f2.toString());
};


function* gen() {
  yield 1;
}
var g = gen();

console.log(g.next());
console.log(g.next());
*/

console.log(g2.next());
console.log(g2.next());