# Day 10 - 40 Days of JavaScript

## **🎯 Goal of This Lesson**

- ✅ Intro
- ✅ Misconception About Hoisting
- ✅ Variable Hoisting
- ✅ Hoisting and let and const
- ✅ Temporal Dead Zone(TDZ)
- ✅ Functional Hoisting
- ✅ Hoisting and Function As an Expression
- ✅ Task and What’s Next?

## 🫶 Support
Your support means a lot.

- Please SUBSCRIBE to [tapaScript YouTube Channel](https://youtube.com/tapasadhikary) if not done already. A Big Thank You!
- Liked my work? It takes months of hard work to create quality content and present it to you. You can show your support to me with a STAR(⭐) to this repository.

    > Many Thanks to all the `Stargazers` who have supported this project with stars(⭐)

### 🤝 Sponsor My Work
I am an independent educator and open-source enthusiast who creates meaningful projects to teach programming on my YouTube Channel. **You can support my work by [Sponsoring me on GitHub](https://github.com/sponsors/atapas) or [Buy Me a Coffee](https://buymeacoffee.com/tapasadhikary)**.

## Video
Here is the video for you to go through and learn:

[![day-10](./banner.png)](https://youtu.be/14H2TsrjcLo "Video")

## The Scope Table
## Comparison Table: `var` vs `let` vs `const`

| Feature               | `var`                         | `let`                         | `const`                       |
|-----------------------|-----------------------------|-----------------------------|-----------------------------|
| **Scope**            | Function scope               | Block scope `{}`             | Block scope `{}`             |
| **Hoisting**         | Hoisted & initialized as `undefined` | Hoisted but in **Temporal Dead Zone (TDZ)** | Hoisted but in **Temporal Dead Zone (TDZ)** |
| **Attached to `window`?** | ✅ Yes | ❌ No | ❌ No |
| **Can be Re-declared?** | ✅ Yes | ❌ No | ❌ No |
| **Can be Reassigned?** | ✅ Yes | ✅ Yes | ❌ No |
| **Initial Value Required?** | ❌ No | ❌ No | ✅ Yes (Must be initialized) |
| **Mutability** | Mutable | Mutable | Immutable (Can't be reassigned but mutable if it's an object or array) |
| **Use in Loops** | Allowed but not recommended (function scope issues) | ✅ Recommended | ❌ Not recommended for changing values |


## **👩‍💻 🧑‍💻 Assignment Tasks**

Please find the task assignments in the [Task File](./task.md).
