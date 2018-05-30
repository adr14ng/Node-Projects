var square = x => x * x;

var user = {
  name: 'Adrian',
  sayHi: () => {
    console.log(arguments);
    console.log(`Hi. I'm ${this.name}`);
  },
  sayHiAlt () {
    console.log(arguments);
    console.log(`Hi. I'm ${this.name}`)
  }
};

user.sayHi(1, 2, 3);
