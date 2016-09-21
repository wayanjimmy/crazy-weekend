let sum = process.argv.filter(function(argument, index) {
  return index >= 2;
}).reduce(function(carrier, value) {
  return carrier + parseInt(value);
}, 0);
console.log(sum);
