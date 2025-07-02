function fib(n) {
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
}

// 0, 1, 1, 2, 3, 5, 8, 13, 21, and so on.


const memo = {};
function fibMemo(n) {
    if (n in memo) return memo[n];
    if (n <= 2) return 1;
    memo[n] = fibMemo(n - 1) + fibMemo(n - 2);
    return memo[n];
}

function runNormal() {
    const n = parseInt(document.getElementById("num").value);
    const output = document.getElementById("output");
    const start = Date.now();
    console.log(start);
    const result = fib(n);
    const end = Date.now();
    console.log(end);
    output.innerHTML = `🔁 Normal Fib(${n}) = <strong>${result}</strong><br>⏱️ Time: ${(
        end - start
    )}ms`;
}

function runMemo() {
    const n = parseInt(document.getElementById("num").value);
    const output = document.getElementById("output");
    const start = Date.now();
    console.log(start);
    const result = fibMemo(n);
    const end = Date.now();
    console.log(end);
    output.innerHTML = `🧠 Memoized Fib(${n}) = <strong>${result}</strong><br>⏱️ Time: ${(
        end - start
    )}ms`;
}
