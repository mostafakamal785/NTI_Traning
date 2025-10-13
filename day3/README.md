
---

````markdown
## 📅 Day 3: Modules, DOM, Async Programming & Browser Runtime Environment  

Today I explored **some of JavaScript’s most powerful features** — the ones that make it truly dynamic in the browser and modern web apps.

### 📘 Topics Covered:
#### 🧩 Part 1: Module Systems in JavaScript
- Learned how to organize code using **ES Modules (import/export)**.  
- Understood the difference between **CommonJS** and **ESM**.  
- Practiced structuring code across multiple files.

#### 🌐 Part 2: DOM Manipulation & Events
- Used **document.querySelector**, **createElement**, and **appendChild** to dynamically build content.  
- Handled **user interactions** with `addEventListener`.  
- Learned the difference between **inline**, **internal**, and **external** event handling.

#### ⚡ Part 3: Synchronous vs Asynchronous JavaScript
- Understood the **call stack**, **event loop**, and **callback queue**.  
- Discovered why JavaScript is **single-threaded** but still handles async tasks efficiently.

#### 🔗 Part 4: Promises in JavaScript
- Learned how to create and chain **Promises** for async operations.  
- Practiced handling success (`.then`) and errors (`.catch`).  
- Example:
  ```js
  fetch('https://api.example.com/data')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
````

#### 💤 Part 5: Async / Await in JavaScript

* Rewrote Promises using **async/await** for cleaner syntax.
* Understood **error handling** with `try...catch`.
* Example:

  ```js
  async function getData() {
    try {
      const res = await fetch('https://api.example.com/data');
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  ```

#### 🧠 Part 6: Browser Runtime Environment

* Learned how the **browser executes JavaScript** using:

  * **Call Stack**
  * **Web APIs**
  * **Event Loop**
  * **Callback Queue**
* Understood how async tasks (like `setTimeout` or `fetch`) interact with the runtime.

---

💡 *Today’s session really connected all the dots — from how JS runs in the browser to how async code works behind the scenes.*

---

