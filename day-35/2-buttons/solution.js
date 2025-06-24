

function createButtons() {
  const buttons = [];

  for (let i = 1; i <= 3; i++) {
    buttons.push(function () {
      console.log(`Button ${i} clicked`);
    });
  }

  return buttons;
}

const [btn1, btn2, btn3] = createButtons();

btn1(); // ?
btn2(); // ?
btn3(); // ?


/*

Now let gives each iteration its own block scope — each closure captures a different i.

In the original code, var is function-scoped — all the closures reference the same i, which ends up as 4 after the loop ends. That’s why all the buttons log:

Button 4 clicked

*/
