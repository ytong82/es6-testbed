let a = 1;
let b = 2;
[a, b] = [b, a];

console.log(a, b);

let iam = "I am";
let name = "David Tong";
let str = `Hello Everyone, ${iam} ${name}!`;

console.log(str);

let obj = {
  name,
  say() {
    console.log("Hello, World!");
  }
}

console.log(obj);

let arr = [1, 3, 5, 7, 9];

arr.forEach((v, i) => {
  console.log("index: " + i + ", value: " + v);
});

let sum = 0;
for (value of arr) {
  sum += value;
}
console.log("sum: " + sum);

let s = new Set();
s.add([1]);
s.add([1]);
console.log(s.size);

let map = new Map();
let key = [1];
map.set(key, "ES6");
let con = map.get(key);
console.log(con);

class Animal {
  constructor(type) {
    this.type = type;
  }
  run() {
    console.log("I can run");
  }
}

class Cat extends Animal {
  constructor(type, name, age) {
    super(type);
    this.name = name;
    this.age = age;
  }

  eat() {
    console.log("I am eating");
  }
}

let cat = new Cat("cat", "kitty", "3");
console.log(cat);
console.log(Cat.prototype);
console.log(cat.__proto__);

let array = new Array();
console.log(Object.getOwnPropertyNames(Array));
console.log(Object.getOwnPropertyDescriptors(Object));

console.log(Object.getOwnPropertyNames(Cat.prototype));
console.log(Object.keys(Cat));