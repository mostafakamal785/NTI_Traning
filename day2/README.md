
---

````markdown
# ⚙️ Day 2 – Core JavaScript Features & Deep Dive

## 🌟 Overview
On the second day of the NTI Bootcamp, I continued exploring **essential JavaScript features** that every developer must understand before diving into frameworks or backend systems.  
The session focused on modern syntax, language behavior, and advanced core concepts.

---

## 🧩 Topics Covered

### Part 1 – `var`, `let`, and `const`
- `var` is **function-scoped**, while `let` and `const` are **block-scoped**.
- `const` variables cannot be reassigned, but their internal object properties can change.
- Example:
  ```js
  var a = 10;
  let b = 20;
  const c = 30;

  if (true) {
    var a = 40; // redeclared globally
    let b = 50; // new local variable
  }

  console.log(a); // 40
  console.log(b); // 20
````

---

### Part 2 – Data Types

* **Primitive types:** string, number, boolean, null, undefined, bigint, symbol
* **Reference types:** objects, arrays, functions
* Example:

  ```js
  console.log(typeof null); // "object"
  console.log(typeof []);   // "object"
  console.log(typeof function(){}); // "function"
  ```

---

### Part 3 – Logic, Evaluation & Unary Operators

* `!` negates truthy/falsy values
* `+` converts strings to numbers
* Example:

  ```js
  console.log(!0); // true
  console.log(+"42"); // 42
  ```

---

### Part 4 – Functions

* **Function Declaration**
* **Function Expression**
* **Arrow Functions**
* Example:

  ```js
  const greet = (name = "Guest") => `Hello, ${name}!`;
  console.log(greet());
  ```

---

### Part 5 – Loops

* `for`, `while`, `do...while`, `for...in`, `for...of`
* Example:

  ```js
  const arr = [10, 20, 30];
  for (const num of arr) console.log(num);
  ```

---

### Part 6 – Arrays

* Common methods: `push`, `pop`, `map`, `filter`, `reduce`
* Example:

  ```js
  const nums = [1, 2, 3];
  const doubled = nums.map(n => n * 2);
  console.log(doubled); // [2, 4, 6]
  ```

---

### Part 7 – Objects & Built-in Objects

* Objects store key-value pairs.
* Built-in objects include: `Math`, `Date`, `JSON`, `Object`, `Array`.
* Example:

  ```js
  const user = { name: "Mostafa", age: 22 };
  console.log(Object.keys(user)); // ["name", "age"]
  ```

---

### Part 8 – Lexical Scope & the `this` Keyword

* Lexical scope: variables are accessible based on where functions are defined.
* `this` depends on **how** a function is called.
* Example:

  ```js
  const obj = {
    name: "Mostafa",
    show() { console.log(this.name); }
  };
  obj.show(); // "Mostafa"
  ```

---

### Part 9 – Template Literals

* Allow multiline strings and variable interpolation.

  ```js
  const name = "Mostafa";
  console.log(`Welcome, ${name}!`);
  ```

---

### Part 10 – Spread & Rest Operators

* **Spread (`...`)** expands arrays or objects.
* **Rest (`...`)** collects multiple arguments.

  ```js
  const nums = [1, 2, 3];
  const copy = [...nums];
  const sum = (...args) => args.reduce((a, b) => a + b);
  ```

---

### Part 11 – Destructuring

* Extract values from arrays or objects easily.

  ```js
  const [x, y] = [10, 20];
  const { name, age } = { name: "Mostafa", age: 22 };
  ```

---

### Part 12 – Short Object Syntax

```js
const name = "Mostafa";
const age = 22;
const user = { name, age }; // same as { name: name, age: age }
```

---

### Part 13 – Default Parameters

```js
function greet(name = "Guest") {
  console.log(`Hello, ${name}`);
}
```

---

### Part 14 – Optional Chaining & Nullish Coalescing

```js
const user = { profile: { name: "Mostafa" } };
console.log(user.profile?.name); // "Mostafa"
console.log(user.profile?.email ?? "Not provided"); // "Not provided"
```

---

### Part 15 – Error Handling

```js
try {
  throw new Error("Something went wrong");
} catch (err) {
  console.error(err.message);
} finally {
  console.log("Execution complete");
}
```

---

## 🧠 Reflection

> This day was packed with modern JavaScript essentials.
> I understood how flexible and dynamic the language is — but also how easy it is to create bugs when not careful with scope or `this`.

I’ll practice by building small examples that mix these concepts (like destructuring inside functions, or chaining methods on arrays).

---

## 📚 Next Steps

* Deepen understanding of `this` binding and arrow functions.
* Try solving 3–5 problems using array methods (`map`, `reduce`, etc.).
* Prepare for Day 3: **Introduction to Node.js and Express**.

