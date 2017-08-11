function sayNameForAll(label) {
  console.log(label + ':' + this.name);
}
var person1 = {
  name: 'Nicholas'
};
var person2 = {
  name: 'Greg'
};
var name = 'Michael';
sayNameForAll.call(this, 'global');
sayNameForAll.call(person1, 'person1');
sayNameForAll.call(person2, 'person2');
