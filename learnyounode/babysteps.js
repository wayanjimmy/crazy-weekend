let sum = process.argv.filter(function(argument, index) {
  return index >= 2;
}).reduce(function(carrier, value) {
  return carrier + +value;
}, 0);
console.log(sum);
