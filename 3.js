let map = new Map();
map.set(1, "foo");
map.set(2, "bar");

for (let value of map) {
  console.log(`value: ${value}`);
}

for (let value in map) {
  console.log(`value: ${value}`);
}

function* fibonacci() {
  let [prev, curr] = [0, 1];
  for (;;) {
    yield curr;
    [prev, curr] = [curr, prev + curr];
  }
}

for (n of fibonacci()) {
  if (n > 1000) {
    break;
  }
  console.log(n);
}

let array = [1, 2, , 4, 5];
console.log(array.__proto__);

array.forEach((value, index, arr) => {
  console.log(`forEach: ${value} ${index}`);
})

for (value in array) {
  console.log(`in: ${value}`);
}

for (value of array) {
  console.log(`of: ${value}`);
}

//Object.prototype.objCustom = function() {};
//Array.prototype.arrCustom = function() {};

let iterable = [3, 5, 7];
iterable.foo = "log";
for (i in iterable) {
  console.log(i);
}

for (i of iterable) {
  console.log(i);
}

let map2 = {
  "foo": 1,
  "bar": 2
};

console.log(map2.__proto__);

let map3 = new Map();
map3.set("foo", 1);
map3.set("bar", 2);

console.log(map3.__proto__);

for (item in map2) {
  console.log(item);
}