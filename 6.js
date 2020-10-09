function* fibonacci() {
  let [prev, curr] = [0, 1];
  while (true) {
    yield curr;
    [prev, curr] = [curr, curr + prev];
  }
}

let fib = fibonacci();

for (const n of fibonacci()) {
  if (n > 5000) {
    break
  }
  console.log(n);
}