var person = {
  name: 'Nicholas',
  sayName: function () {
    console.log(this.name);
  }
};
person.sayName();
