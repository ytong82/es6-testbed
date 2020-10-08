let array = [2, 3, 7];
let array2 = new Array();
array2.push(2);

console.log(array.__proto__);
console.log(array2.__proto__);

let set = new Set();
set.add(2);
set.add(2);

console.log(set.__proto__);

let map = {
  "foo": 1,
  "bar": 3
};

let map2 = new Map();
map2.set("foo", 1);
map2.set("bar", 3);

console.log(map.__proto__);
console.log(map2.__proto__);

for (items in map) {
  console.log(`map: ${items}`);
}

for (items in map2) {
  console.log(`map2: ${items}`);
}

console.log(typeof(map));
console.log(typeof(map2));

console.log(map instanceof Map);
console.log(map2 instanceof Map);