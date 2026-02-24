console.log("Running on call stack"); // running on call stack

setTimeout(() => {
  console.log("3 Running on macro task"); // running on macro task
  Promise.resolve().then(() => {
    console.log("4 macro task -> micro task"); // from macro task que -> micro/priority task queue
    setTimeout(() => {
      console.log("macro -> micro -> macro"); // micro task queue -> macro task queue
    }, 0);
  });
}, 0);

Promise.resolve().then(() => {
  console.log("2 Running on priority/micro que"); // micro task queue
  setTimeout(() => {
    console.log("5 micro task que -> macro task"); // micro task -> macro task
  }, 0);
});
