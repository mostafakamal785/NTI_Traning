
---

## 🗓️ **Day 15: Error Handling, Security, Atlas & GitHub Introduction**

**📘 Topics Covered:**

* **Part 1:** Global Error Handling in Express
* **Part 2:** Securing Your App and MongoDB from Attacks
* **Part 3:** MongoDB Atlas
* **Part 4:** Git & GitHub — Brief Introduction

---

### 🧠 **What I Learned**

Today was a full-stack foundation day — I learned how to make my backend **safer, more reliable, and maintainable**, while also understanding how to host my database and manage code with version control.

---

### ⚙️ **Part 1: Global Error Handling in Express**

Error handling is critical to prevent app crashes and to give clients clear feedback when something goes wrong.

#### ✅ Key Concepts:

* Creating a **global error-handling middleware** that catches all errors in one place.
* Using `try/catch` blocks or `asyncHandler` wrappers to manage asynchronous errors.
* Sending **custom error responses** (status, message, stack for dev mode).
* Structuring errors consistently with a custom `ErrorResponse` class.

#### 🧩 Example:

```js
// middleware/errorHandler.js
export const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || 'Server Error',
  });
};
```

```js
// Example usage
app.use(errorHandler);
```

---

### 🛡️ **Part 2: Security — Protecting Express & MongoDB**

Learned how to secure both the **Node.js app** and **MongoDB** from common attacks:

#### 🧱 Express Security Techniques:

* **Helmet:** Adds secure HTTP headers

  ```bash
  npm install helmet
  ```

  ```js
  import helmet from 'helmet';
  app.use(helmet());
  ```
* **Rate Limiting:** Prevents brute-force or DDoS attacks

  ```bash
  npm install express-rate-limit
  ```

  ```js
  import rateLimit from 'express-rate-limit';
  const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100 });
  app.use(limiter);
  ```
* **Express Mongo Sanitize:** Prevents NoSQL injection attacks

  ```bash
  npm install express-mongo-sanitize
  ```

  ```js
  import mongoSanitize from 'express-mongo-sanitize';
  app.use(mongoSanitize());
  ```

#### 🗄️ MongoDB Security Tips:

* Always hide credentials in `.env`.
* Use **users with limited roles**, not the root user.
* Enable **IP Whitelisting** and **Network Access Rules** on MongoDB Atlas.
* Use **strong passwords** and **HTTPS connections**.

---

### 🌐 **Part 3: MongoDB Atlas**

MongoDB Atlas is a **cloud-based MongoDB service** that allows hosting databases online without manual setup.

#### 🔧 Steps Learned:

1. Created a cluster in [MongoDB Atlas](https://www.mongodb.com/atlas/database).
2. Added IP address `0.0.0.0/0` for testing (later restricted it for security).
3. Created a database user and connected using a connection string stored in `.env`.
4. Verified connection in Node.js:

   ```js
   import mongoose from 'mongoose';
   mongoose.connect(process.env.MONGO_URI)
     .then(() => console.log('✅ MongoDB Connected'))
     .catch(err => console.error('❌ MongoDB Error:', err));
   ```

---

### 🧭 **Part 4: Git & GitHub — Brief Introduction**

Learned the **basics of version control** and how to manage projects collaboratively using Git and GitHub.

#### 🪄 Key Commands:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <repo-url>
git push -u origin main
```

#### 🧠 Concepts:

* **Commits**: Snapshots of your project’s state.
* **Branches**: Isolated development environments.
* **Pull requests**: Used for merging and reviewing code.
* **.gitignore**: Prevents sensitive or unnecessary files (like `node_modules` or `.env`) from being tracked.

---

### 🚀 **Key Takeaways**

* Global error handling makes debugging and scaling much easier.
* Security should be baked into every Express project — not added later.
* MongoDB Atlas simplifies cloud hosting but requires careful access control.
* GitHub is essential for collaboration, version control, and backup.

---
