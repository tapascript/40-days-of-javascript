
// - What Will We Learn Today

// 1. JavaScript Memory Management
// 2. Reachability Theory
// 3. Garbage Collection(GC)
// 4. Resources to Go More Depth

// Reachability

let gb = 10;

function someFunc(b) {
    let a;
    someOtherFunction()
    return a + 30;
}

function someOtherFunction() {
    let c = {};
}

// roots

let employee = {salary: 10000};

employee = null;


function createCycle(objA, objB) {
  objA.ref = objB;  // objA references objB
  objB.ref = objA;  // objB references objA

  return {
    "A": objA,
    "B": objB
  }
}

const cycle = createCycle({sal: 100}, {sal: 200});


const dept = {
    name: "finance"
}

const department = dept;
