

function createButtons() {
  const buttons = [];

  for (var i = 1; i <= 3; i++) {
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

What’s the Expected Behavior?

Each button should log:

Button 1 clicked
Button 2 clicked
Button 3 clicked

But it doesn’t. Why?

*/

/*

Hint:

This is a classic closure inside a loop issue. Ask yourself:

- What does var do in a loop?
- Does the function remember the value at the time it was created?
- What if you replace var with let?

*/
