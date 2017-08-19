function sayNameForAll(label) {
  console.log(label + ':' + this.name);
}
var person1 = {
  name: 'Nicholas'
};
var person2 = {
  name: 'Greg'
};
var sayNameForPerson1 = sayNameForAll.bind(person1);
sayNameForPerson1('person1');
var sayNameForPerson2 = sayNameForAll.bind(person2, 'person2');
sayNameForPerson2();
person2.sayName = sayNameForPerson1;
person2.sayName('person2');
console.log(person2.name);
