````markdown
## 📅 Day 6: Express.js for Server Development  

---

### 🚀 Part 1: Introduction to Express.js
- Learned that **Express.js** is a lightweight and flexible framework for building web servers with Node.js.  
- Provides tools for **routing**, **middleware**, and **request/response handling**.  
- Simplifies server-side logic compared to raw `http` module.

---

### ⚙️ Part 2: Creating Your First Express Server
- Installed Express and created a simple server.  
  ```bash
  npm install express
````

```js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.listen(3000, () => console.log('Server running on port 3000'));
```

---

### 🧭 Part 3: Express.js Routing Basics

* Learned how to define routes for different endpoints (`/`, `/about`, `/contact`, etc.).
* Supported HTTP methods: **GET**, **POST**, **PUT**, **DELETE**.

  ```js
  app.get('/about', (req, res) => res.send('About Page'));
  app.post('/login', (req, res) => res.send('Login Success'));
  ```

---

### 🔄 Part 4: Handling Request and Response

* Used the `req` (request) and `res` (response) objects to manage data flow between client and server.
* Methods used:

  * `res.send()`
  * `res.json()`
  * `res.status()`

  ```js
  app.get('/user', (req, res) => {
    res.status(200).json({ name: 'Mostafa', role: 'Developer' });
  });
  ```

---

### 🔍 Part 5: Working with Query Parameters in Express.js

* Extracted query parameters from the URL using `req.query`.

  ```js
  app.get('/search', (req, res) => {
    const { q } = req.query;
    res.send(`You searched for: ${q}`);
  });
  ```
* Example request: `/search?q=node`

---

### 🧩 Part 6: Working with Route Parameters

* Used dynamic route parameters via `req.params`.

  ```js
  app.get('/user/:id', (req, res) => {
    res.send(`User ID: ${req.params.id}`);
  });
  ```
* Example request: `/user/42`

---

### 🧠 Part 7: Working with Request Body & Sending JSON Data in Express.js

* Used **express.json()** middleware to parse JSON body data from POST requests.

  ```js
  app.use(express.json());

  app.post('/api/data', (req, res) => {
    console.log(req.body);
    res.json({ message: 'Data received', data: req.body });
  });
  ```

---

### 📝 Part 8: Sending Form Data in Express.js

* Used **express.urlencoded()** to handle form submissions (URL-encoded data).

  ```js
  app.use(express.urlencoded({ extended: true }));

  app.post('/submit', (req, res) => {
    res.send(`Form submitted by ${req.body.name}`);
  });
  ```
* Example form submission:

  ```html
  <form method="POST" action="/submit">
    <input name="name" />
    <button type="submit">Send</button>
  </form>
  ```

---

### 🧱 Part 9: Express Middleware Basics

* Understood what **middleware** is — functions that execute during the request-response cycle.
* Used for tasks like authentication, logging, and error handling.

  ```js
  app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
  });
  ```
* Learned about:

  * **Application-level middleware** (`app.use`)
  * **Route-level middleware**
  * **Built-in middleware** (`express.json`, `express.static`)
  * **Error-handling middleware**

---

```
```
