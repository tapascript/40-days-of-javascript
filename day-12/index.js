console.log("Day 12 - JavaScript Objects");

let user = {
    name: "tapas",
    age: 40,
    "is adimin": true
};

console.log(user.name); // "tapas"
console.log(user.age); // 40

user.isSeniorCitizen = false;
user["movie lover"] = true;

console.log(user);

console.log(user["is adimin"]);

user.age = 34;
user["movie lover"] = false;

// delete user["movie lover"];
// delete user.age;
console.log(user)

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

const bmwCar = new Car("BMW", "X1");
const audiCar = new Car("Audi", "A8");
console.log(bmwCar)
console.log(audiCar)

console.log(bmwCar instanceof Car);

const person = new Object()
person.name = "Alpha";
person.age = 76;
console.log(person);


// factory
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
console.log(user1)
user1.name;
user1.age;
user1.greet();
const user2 = createUser("bob", 32)
console.log(user2)

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
// for ... in

for (let key in profile) {
    console.log(key)
    console.log(profile[key]);
}

console.log(Object.keys(profile));

console.log(profile.salary); // undefined

console.log("salary" in profile);

if (!profile.salary) {
    console.log("The salary property doesn't exist");
}

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

// Static Methods

const target = {p:1, a:2};
const source = {a:3, b:5};

const retrunedObj = Object.assign(target, source);
console.log(retrunedObj);

const obj = {name: "tapaScript"};
const obj2 = Object.assign({}, obj);
console.log(obj2)
console.log(obj === obj2)

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

const myArr = Object.entries(myObj);
console.log(myArr)

const entries = new Map([
    ["foo", "bar"],
    ["baz", 42],
]);
const objEntries = Object.fromEntries(entries)
console.log(objEntries);


const emp = {
    sal: 100
}

Object.freeze(emp);

emp.sal = 200;
emp.name = "Alex";
delete emp.sal;

console.log(emp)

console.log(Object.isFrozen(emp));


const dept = {
    name: "finance"
}

Object.seal(dept);

dept.address = "Bangalore"
delete dept.name;

dept.name = "HR"
console.log(dept)

console.log(Object.hasOwn(dept, "address"))


