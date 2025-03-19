console.log("**** Examples ****")

const user = {
    name: "Tapas",
    greet: function () {
      const inner = () => {
        console.log(`Hello, ${this.name}!`);
      }
      inner();
    },
  };

  user.greet();



  const obj = {
    name: "John",
    greet: function () {
      console.log(`Hello, ${this.name}!`);
    },
  };

  const greetFn = obj.greet;

  greetFn.call(obj)
