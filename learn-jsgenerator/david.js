function foo(x) {
  console.log(`x: ${x}`);
}

function *bar() {
  yield;
  foo(yield);
}
