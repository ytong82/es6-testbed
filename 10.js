function helloWorld() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //reject("Goodbye!");
      resolve("Hello World!");
    }, 2000);
  });
}

async function msg() {
  const msg = await helloWorld();
  console.log('Message:', msg);
}

msg();