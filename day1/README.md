````
# 🧭 Day 1 – Introduction to Web Development & JavaScript Basics

## 🌐 Overview
The first day of the NTI Bootcamp introduced the fundamentals of **web development** and a hands-on overview of **JavaScript**.  
We explored what web development means, how the browser executes code, and how JavaScript fits into the front-end and back-end ecosystem.

---

## 💡 Topics Covered
- Introduction to Web Development and its main components.
- JavaScript Basics:
  - **Data Types** (string, number, boolean, null, undefined, object).
  - **Variables** (`var`, `let`, and `const`) and **scope** differences.
  - **Operators** (arithmetic, comparison, logical).
  - **Conditionals** (`if`, `else`, `switch`).
  - **Loops** (`for`, `while`, `do...while`, `for...of`).
  - **Functions** — declaration, expression, and arrow functions.

---

## 💻 Example Snippets

```js
// Example: variable scope
let globalVar = "Global";

function testScope() {
  let localVar = "Local";
  console.log(globalVar); // Accessible
  console.log(localVar);  // Accessible
}

testScope();
// console.log(localVar); // ❌ ReferenceError
````

```js
// Example: conditional and loop
for (let i = 0; i < 5; i++) {
  if (i % 2 === 0) console.log(`${i} is even`);
}
```

---

## 🧠 Reflection

> Today’s session was a solid foundation.
> It reminded me how important it is to understand *how JavaScript actually runs in the browser* and to avoid rushing into frameworks before mastering these basics.

I plan to reinforce these concepts by solving small JS exercises daily — focusing on logic rather than syntax memorization.

---

## 📚 Next Steps

* Practice with simple JS challenges (loops, conditionals, and scopes).
* Explore the difference between **execution context** and **scope chain**.
* Prepare for Day 2: **Asynchronous JavaScript (callbacks & promises)**.

```

---
