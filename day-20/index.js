console.log("Day 20 - DOM: Advanced Tips");

// Efficient DOM traversal
const parent = document.querySelector('.card');
const firstChild = parent.firstElementChild;
const next = firstChild.nextElementSibling;
const lastChild = parent.lastElementChild;
const parentOfElement = firstChild.parentElement;

// Templates and Cloning
const template = document.getElementById('card-template');
const clone = template.content.cloneNode(true);
clone.querySelector('.title').textContent = "DOM Advance Topic";
clone.querySelector('.desc').textContent = "Hope you are learning something New";

document.body.appendChild(clone);

// Document Fragment and Range

// Document Fragment
// - Not part of the main DOM tree until you insert it
// - Acts like a temp container
// - Great for building chunks of DOM before adding them.

const fragment = document.createDocumentFragment();

for (let i = 0; i<=3; i++) {
    const li = document.createElement('li');
    li.textContent = `Item ${i}`;
    fragment.appendChild(li);
}

document.getElementById("list").appendChild(fragment);

// Range
const p = document.getElementById('para');

const range = document.createRange();

range.setStart(p.firstChild, 6); // After "Hello "
range.setEnd(p.childNodes[2], 4)

const content = range.cloneContents();

console.log(content);

// Shadow DOM
document.querySelector('.card').innerHTML

// shadow host

const shadowHost = document.querySelector('#box');
const shadow = shadowHost.attachShadow({mode: 'open'});
shadow.innerHTML = `<style>p { color: red; }</style><p>Hello Shadow!</p>`;

// Advanced Class Manipulation

const btn = document.querySelector('.btn');
btn.classList.add('active');
btn.classList.remove('disabled');
btn.classList.toggle('visible');
btn.classList.replace('error', 'success');

// Handling Large-Scale DOM Updates

function addItems(count) {
    const frag = document.createDocumentFragment();
    for (let i = 0; i < count; i++) {
      const div = document.createElement('div');
      div.textContent = `Item ${i}`;
      frag.appendChild(div);
    }
    document.body.appendChild(frag);
  }

  addItems(10);

  // Mutation Observer

  // const observer = new MutationObserver(callback);
  // observer.observe(targetNode, config);

  const target = document.getElementById('watchMe');

  const observer = new MutationObserver((mutationsList, observer) => {
    for (const mutation of mutationsList) {
        console.log(`Type of mutation: ${mutation.type}`);

        if (mutation.type === 'childList') {
            console.log('A child node was added or removed.');
        }

        if (mutation.type === 'attributes') {
            console.log(`Attribute ${mutation.attributeName} was changed.`);
        }

        if (mutation.type === 'characterData') {
            console.log(`Text content changed to: ${mutation.target.data}`);
        }
    }
  });

  const config = {
    subtree: true,
    characterData: true,
    childList: true,
    attributes: true,
  }

  observer.observe(target, config);

  function changeDOM() {
    target.textContent = "Goodbye!";
    target.setAttribute("data-status", "Changed");
  }






