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
//console.log(Cat.prototype);
//console.log(cat.__proto__);


console.log(Object.getOwnPropertyNames(Cat.prototype));
console.log(Object.getOwnPropertyNames(Cat));

console.log(Object.getOwnPropertyNames(Map.prototype));
console.log(Object.getOwnPropertyNames(Map));