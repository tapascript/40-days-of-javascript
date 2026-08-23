console.log("Day 12 - JavaScript Objects");

let user = {
    name: "tapas",
    age: 40,
    "is adimin": true  // multi word property
};

console.log(user.name); // "tapas"
console.log(user.age); // 40

user.isSeniorCitizen = false;
user["movie lover"] = true;

console.log(user);
// Accessing multi word property
console.log(user["is adimin"]);

user.age = 34;
user["movie lover"] = false;

// delete user["movie lover"];
// delete user.age;
console.log(user)
// Dynamic Property Access
const someKey = "age";

console.log(user[someKey]); // 34

/*let car = prompt("Which is your fav car?");

let favCars = {
    [car]: 5
}

console.log(favCars);*/

// Cosntructor Function
function Car(name, model) {
    this.name = name;
    this.model = model
}
//here Car is uppercase because it is a constructor function,
// so by convention we use uppercase for constructor functions
const bmwCar = new Car("BMW", "X1");
const audiCar = new Car("Audi", "A8");
console.log(bmwCar)
console.log(audiCar)

console.log(bmwCar instanceof Car);
// Object Creation using Object Constructor
const person = new Object()
person.name = "Alpha";
person.age = 76;
console.log(person);


// factory function means a function that returns an object
function createUser(name, age) {
    return {
       name,
       age,
       greet() {
        console.log(this.name)
       }
    }
}

const user1 = createUser("tapas", 39)
console.log(user1) // {name: "tapas", age: 39, greet: ƒ}
user1.name;
user1.age;
user1.greet();
const user2 = createUser("bob", 32)
console.log(user2)

// Nested Objects
let profile = {
    name: "tapas",
    company: "CreoWis",
    message: function() {
        console.log(`${this.name} works at ${this.company}`)
    },
    address: {
        city: "Bangalore",
        pin: 56032,
        state: "Karnataka",
        country: "India",
        greeting: function() {
            console.log("Welcome to India")
        }
    }
}
// for ... in use to iterate over object properties

for (let key in profile) {
    console.log(key)
    console.log(profile[key]);
}
//here Object.keys() method returns an array of a given object's own enumerable property names
console.log(Object.keys(profile)); // ["name", "company", "message", "address"]

console.log(profile.salary); // undefined because salary property doesn't exist

console.log("salary" in profile); // false

if (!profile.salary) {
    console.log("The salary property doesn't exist");
}
// Accessing Nested Object Properties
console.log(profile.address.country); // India
profile.address.greeting();
console.log(profile.name);// "tapas"
console.log(profile.company); // "CreoWis"

profile.message();

// Object Reference

let fruit = { name: "mango"}; // XA01
const oneMoreFruit = { name: "mango"}; // YB02

console.log(fruit == oneMoreFruit); // false
console.log(fruit === oneMoreFruit); // false

fruit = oneMoreFruit;


console.log(fruit == oneMoreFruit); // true
console.log(fruit === oneMoreFruit); // true

// Static Methods used with Objects

const target = {p:1, a:2};
const source = {a:3, b:5};
//object.assign(target, source) method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.
const retrunedObj = Object.assign(target, source);
console.log(retrunedObj);// {p: 1, a: 3, b: 5} a:2 is overwritten by a:3 because b property doesn't exist in target object

const obj = {name: "tapaScript"};
const obj2 = Object.assign({}, obj);
console.log(obj2)  // {name: "tapaScript"}
console.log(obj === obj2) // false

const obj3 = {
    a: 1,
    b: {c: 2}
}
const obj4 = Object.assign({}, obj3);
console.log(obj4); // {a: 1, b: {c: 2}}
// obj4.b.c = 3;

// obj4.a = 100; 

// console.log(obj4.a); // 100
// console.log(obj3.a); // 1

// console.log(obj4.b.c) // 3
// console.log(obj3.b.c) // 3

const obj5 = structuredClone(obj3);

obj5.a = 300;
obj5.b.c = 30;

console.log(obj5.a); // 300
console.log(obj3.a); // 1

console.log(obj5.b.c) // 30
console.log(obj3.b.c) // 2



const myObj = {
    a: "tapas",
    b: 32,
};
// Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
const myArr = Object.entries(myObj); // [['a', 'tapas'], ['b', 32]]
console.log(myArr) //object to array conversion

const entries = new Map([
    ["foo", "bar"],
    ["baz", 42],
]);
const objEntries = Object.fromEntries(entries) // converts a list of key-value pairs into an object
console.log(objEntries); // array to object conversion {foo: "bar", baz: 42}

const emp = {
    sal: 100
}
// Freezing an Object which makes it immutable but shallowly 
Object.freeze(emp);

emp.sal = 200; // won't work because object is frozen
emp.name = "Alex"; // won't work because object is frozen
delete emp.sal;

console.log(emp) // {sal: 100}

console.log(Object.isFrozen(emp)); // true


const dept = {
    name: "finance"
}

Object.seal(dept); // makes the object sealed but shallowly 

dept.address = "Bangalore" // won't work because object is sealed
delete dept.name;

dept.name = "HR" // works because we can modify existing properties in sealed object
console.log(dept) // {name: "HR"}

console.log(Object.hasOwn(dept, "address"))


