console.log("day 05");

// for loop
 // “A for loop is best when we know exactly how many times we need to run a block of code.”

 /*
 for (initialization; condition; update) {
    // Code
 }
*/

for (let count=1; count <= 5; count++ ) {
    console.log("Iteration/Loop", count)
}

// Addition of even numbers between 1 to 100

let sum = 0;
for (let i = 1; i<= 100; i++) {
    if (i % 2 === 0) {
        //console.log("i", i)
        //sum = sum + i;
        sum += i;
    }
}

console.log("Sum is", sum);

let language = "JavaScript";

for (let i = 0; i < language.length; i++) {
    console.log(language.charAt(i))
}

// Nested Loop

for(let i =1; i<=3; i++) {
    for(let j=1; j<=3; j++) {
        console.log("Row", i, "Col", j)
    }
}

// Break and Continue

for (let i=1; i<=5; i++) {
    if (i===3) break;
    console.log(i)
}

// Continue

for (let i=1; i<=5; i++) {
    if (i===3) continue;
    console.log(i)
}

// Multiple Counters for single loop

for(let i=1, j=10; i<=10 && j>=1 ; i++, j--) {
    console.log(i, j);
}

/*
*
* *
* * *
* * * *
* * * * *
*/

// While Loop
    // “A while loop runs as long as a given condition is true. It’s best when we don’t know in advance how many iterations are needed.”
/*
 while(condition) {
    // Code
 }
*/

let counter = 1;
while(counter <=5) {
    console.log(counter);
    counter++;
}

// do-while
    // “A do-while loop ensures that the code executes at least once before checking the condition.”
/*
    do {
        // Code
    } while(condition);
*/

let num = 1;
do {
    console.log(num);
    num++;
} while(num <=5)


// Infinite Loop

for(;;){
    console.log("I am looping forever!!!")
}

while(true) {

}

do {
    // Code
} while(true)
