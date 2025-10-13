
---

````markdown
## 📅 Day 4: HTTP, Error Handling, OOP & Git Basics  

Today’s session focused on how JavaScript communicates with servers, handles errors gracefully, and uses Object-Oriented Programming to structure code — plus an introduction to Git fundamentals.

---

### 🌍 Part 1: HTTP, XML, AJAX, XHR Object and JSON
- Learned how the **HTTP protocol** works (Request → Response cycle).  
- Understood **AJAX (Asynchronous JavaScript and XML)** and how it enables dynamic page updates.  
- Explored the **XMLHttpRequest (XHR)** object to make manual HTTP requests.  
- Practiced working with **JSON** (JavaScript Object Notation) — the standard format for data exchange.  
  ```js
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.example.com/data');
  xhr.onload = () => console.log(JSON.parse(xhr.responseText));
  xhr.send();
````

---

### ⚡ Part 2: Async/Await and the `fetch()` Method

* Used the **fetch()** API to replace traditional AJAX calls with cleaner, Promise-based syntax.
* Combined it with **async/await** for better readability.

  ```js
  async function getUser() {
    try {
      const res = await fetch('https://api.example.com/user');
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.error('Error fetching user:', err);
    }
  }
  getUser();
  ```

---

### 🧩 Part 3: Error Object in JavaScript

* Learned how to create and throw custom errors using the `Error` class.
* Practiced **try...catch** blocks for error handling in both sync and async code.

  ```js
  try {
    throw new Error('Something went wrong!');
  } catch (e) {
    console.error(e.message);
  }
  ```

---

### 🧱 Part 4: Introduction to OOP in JavaScript

* Understood **Object-Oriented Programming (OOP)** principles:

  * **Encapsulation**, **Inheritance**, **Polymorphism**, **Abstraction**
* Created **classes** and **objects** using ES6 syntax.
* Practiced using **constructors**, **methods**, and **`this`** keyword.

  ```js
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    greet() {
      console.log(`Hi, I’m ${this.name}, ${this.age} years old.`);
    }
  }

  const user = new Person('Mostafa', 21);
  user.greet();
  ```

---

### 🧠 Part 5: Introduction to Git and GitHub

* Learned **what version control is** and why Git is essential for developers.
* Practiced basic commands:

  ```bash
  git init
  git add .
  git commit -m "Initial commit"
  git branch -M main
  git remote add origin <repo-url>
  git push -u origin main
  ```
* Understood how to use **GitHub** for hosting and collaborating on projects.
* Learned the difference between **Git (local)** and **GitHub (remote)**.

---

💡 *Today’s topics connected front-end JavaScript with the real web — making it interactive, maintainable, and collaborative.*

---


