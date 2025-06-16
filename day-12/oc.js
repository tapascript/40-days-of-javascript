console.log("Optional Chaining...")

const employee = {
    salary: {
        bonus: 300
    }
};

console.log(employee.department); // undefined

//console.log(employee.department.name); // Error

// const name = employee.department && employee.department.name

const name = employee.department?.name
console.log(name)