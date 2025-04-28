# Assignment: Recipe Finder App

Build a Recipe Finder web app using JavaScript DOM skills to display recipes based on a search keyword.

This project will NOT use any external API — we’ll use dummy data.

## TODO

Use JavaScript DOM to:

- Display a list of recipes dynamically.
- Filter recipes by title based on user’s search input.
- No frameworks (no React, Vue, etc.)
- Use only HTML, CSS, and Vanilla JavaScript.
- Dummy Data is provided — store it inside your JavaScript file.

### Dummy Data

```js
const recipes = [
  {
    title: "Spaghetti Carbonara",
    ingredients: ["Spaghetti", "Eggs", "Parmesan Cheese", "Bacon"],
    instructions: "Cook pasta. Mix with eggs and cheese. Add bacon."
  },
  {
    title: "Chicken Curry",
    ingredients: ["Chicken", "Curry Powder", "Onions", "Tomatoes"],
    instructions: "Cook onions, add chicken, spices, and tomatoes."
  },
  {
    title: "Grilled Cheese Sandwich",
    ingredients: ["Bread", "Cheddar Cheese", "Butter"],
    instructions: "Butter bread, place cheese between slices, and grill."
  },
  {
    title: "Veggie Stir Fry",
    ingredients: ["Broccoli", "Carrots", "Bell Peppers", "Soy Sauce"],
    instructions: "Stir fry vegetables and add soy sauce."
  }
];
```

## Expectations

- A search bar at the top.
- As the user types, filter recipes by title (case insensitive).
- If no recipe found, show a “No recipes found” message.
- Clicking on a recipe title should expand/collapse to show ingredients and instructions.
- Add a clear button to reset the search.
- Add smooth slide animation when expanding/collapsing recipe details.
- Save last search term in localStorage and prefill the input when the page reloads.

## Deliverables

- A project on GitHub with all code and clear readme.
- Post the project link on discord's task-assignments channel of 40 days of JavaScript.
