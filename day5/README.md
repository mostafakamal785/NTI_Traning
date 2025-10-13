````markdown
## 📅 Day 5: Getting Started with Node.js  

---

### ⚙️ Part 1: Understanding Node.js and Its Runtime Environment
- Learned what **Node.js** is — a JavaScript runtime built on **Chrome’s V8 engine**.  
- Understood how Node allows JavaScript to run outside the browser.  
- Explored the **event-driven**, **non-blocking I/O model** that makes Node.js powerful for servers.

---

### 🧩 Part 2: How to Download and Install Node.js
- Installed Node.js and verified installation using:  
  ```bash
  node -v
  npm -v
````

* Explored how Node Package Manager (**npm**) works.

---

### ▶️ Part 3: How to Run JavaScript in Node.js

* Created and executed `.js` files using the terminal:

  ```bash
  node app.js
  ```
* Learned how `console.log()` outputs directly to the terminal instead of the browser console.

---

### 📦 Part 4: Node.js Modules & User-Created Modules

* Understood **CommonJS module system** (`require`, `module.exports`).
* Created custom modules and imported them in other files.

  ```js
  // math.js
  function add(a, b) {
    return a + b;
  }
  module.exports = add;

  // app.js
  const add = require('./math');
  console.log(add(2, 3));
  ```

---

### 📚 Part 5: npm, package.json & External Modules

* Initialized a new Node.js project using:

  ```bash
  npm init -y
  ```
* Installed external packages like **lodash** or **chalk**:

  ```bash
  npm install chalk
  ```
* Understood the role of **package.json** in managing dependencies.

---

### 🔧 Part 6: Node.js Core Modules Overview

* Explored important built-in modules:

  * `fs` (File System)
  * `http` (Server creation)
  * `os` (System information)
  * `path` (File paths)
* Learned how to import them using `require()`.

---

### 🌍 Part 7: The Global Object in Node.js

* Learned about the **global object** (similar to `window` in browsers).
* Key properties: `__dirname`, `__filename`, `process`, `setTimeout`, `clearInterval`.

---

### 📁 Part 8: File System Module (fs) Basics

* Practiced reading and writing files using Node’s `fs` module.

  ```js
  const fs = require('fs');
  fs.writeFileSync('note.txt', 'Hello Node.js');
  const data = fs.readFileSync('note.txt', 'utf-8');
  console.log(data);
  ```

---

### 🌐 Part 9: HTTP Module Basics in Node.js & Nodemon

* Created a simple HTTP server using Node’s `http` module.

  ```js
  const http = require('http');
  const server = http.createServer((req, res) => {
    res.end('Hello from Node.js server!');
  });
  server.listen(3000);
  ```
* Used **Nodemon** to auto-restart the server on file changes.

  ```bash
  npm install -g nodemon
  nodemon app.js
  ```

---

### 💻 Part 10: Node.js CLI Tools & Debugging for Beginners

* Ran scripts directly from the terminal using custom commands in `package.json`.
* Learned to use Node’s built-in debugger:

  ```bash
  node inspect app.js
  ```
* Practiced using **console**, **breakpoints**, and **error stack traces** for debugging.

---

```
```
