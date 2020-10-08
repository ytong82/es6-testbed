const map = new Map();
map.set(1, "foo");
map.set(2, "bar");
map.set(3, "bax");

console.log([...map].filter(([k, v]) => k < 2));
console.log([...map].map(([k, v]) => [k * 2, '_' + v]));