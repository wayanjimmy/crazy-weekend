function sayNameForAll() {
  console.log(this.name);
}
var person1 = {
  name: 'Nicholas',
  sayName: sayNameForAll
};
var person2 = {
  name: 'Greg',
  sayName: sayNameForAll
};
var name = 'Michael';
person1.sayName();
person2.sayName();
sayNameForAll();
