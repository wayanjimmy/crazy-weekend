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
sayNameForAll.apply(this, ['global']);
sayNameForAll.apply(person1, ['person1']);
sayNameForAll.apply(person2, ['person2']);
