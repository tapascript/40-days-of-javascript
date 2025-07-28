// What will we DO today

// 1. Build Confidence in Solving real JavaScript interview questions.
// 2. Learn how to communicate thought processes clearly.
// 3. Understand core concepts deeply (not just surface-level syntax).
// 4. Practice hands-on machine coding rounds.
// 5. Develop debugging, optimization, and refactoring skills.


// Not so good implementation

let todos = [];

function addTodo() {
    const val = document.getElementById("todo-input").value;
    todos.push(val);
    localStorage.setItem("todos", JSON.stringify(todos));
    document.getElementById("list").innerHTML += `<li>${val}</li>`;
}

// Good Implemenatation

class TodoApp {
  constructor() {
    this.todos = JSON.parse(localStorage.getItem('todos')) || [];
    this.input = document.getElementById('todo-input');
    this.list = document.getElementById('list');
    document.getElementById('add-btn').addEventListener('click', () => this.addTodo());
    this.render();
  }

  addTodo() {
    const val = this.input.value.trim();
    if (!val) return alert('Todo cannot be empty');
    this.todos.push(val);
    this.saveAndRender();
  }

  saveAndRender() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
    this.render();
  }

  render() {
    this.list.innerHTML = '';
    this.todos.forEach(todo => {
      const li = document.createElement('li');
      li.textContent = todo;
      this.list.appendChild(li);
    });
  }
}

new TodoApp();