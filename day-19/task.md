# Tasks

Please complete the following tasks and post them on the tapaScript Discord under "40 Days of JavaScript".

> **DO NOT USE AI to FIND ANSWERS**. If you are stuck, let's discuss it on DISCORD and learn. Also, please note that none of the answers need you to create any UI. Just focus on the logic building and print the output on the browser console.

## 1. Create a Dynamic Tabbed Interface

Build a clean, accessible tab component where clicking on a tab header displays the corresponding tab content. It mimics real-world use like dashboards, profile settings, or pricing plans.

### Functional Requirements

- ✅ Clicking a tab title shows the corresponding content.
- ✅ Only one tab content is visible at a time.
- ✅ The active tab should have a visual highlight.
- ✅ Add a keyboard shortcut: pressing 1, 2, or 3 switches to that tab.

    Example:

    ```js
    document.addEventListener("keydown", (e) => {
        if (e.key === "1") switchToTab(1);
        if (e.key === "2") switchToTab(2);
        if (e.key === "3") switchToTab(3);
        });
    ```

- ✅ Use event delegation to handle tab clicks.
- ✅ Use classList to manage active state.
- ✅ Use a custom event to broadcast when a tab is changed (log tab name to console).
- ✅ Use stopPropagation() if needed during advanced control.

### Basic HTML Structure

```html
<div class="tabs">
  <div class="tab-headers">
    <button class="tab active" data-tab="1">Home</button>
    <button class="tab" data-tab="2">About</button>
    <button class="tab" data-tab="3">Contact</button>
  </div>
  <div class="tab-contents">
    <div class="content active" data-tab="1">Welcome to Home</div>
    <div class="content" data-tab="2">About us page here.</div>
    <div class="content" data-tab="3">Contact info displayed here.</div>
  </div>
</div>
```
