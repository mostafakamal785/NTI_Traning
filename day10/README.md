
---

## 🔥 **Day 10: Deep Dive into Mongoose and Files**

> 🎯 **Goal:** Gain a deep understanding of **Mongoose and MongoDB performance optimization**, design data relationships properly, and learn how to handle **large files efficiently** using **Node.js Streams**.

---

### **Part 1: Connecting Documents in Mongoose — Using `.lean()` for Faster Queries**

* **Goal:** Learn how to connect documents and improve query performance.

* **Key Concepts:**

  * Difference between **Referencing** and **Embedding**.
  * Using `.populate()` to fetch related data.
  * Using `.lean()` to return plain JavaScript objects instead of Mongoose documents for faster performance and lower memory usage.

* **Example:**

  ```js
  const posts = await Post.find()
    .populate('userId', 'name email')
    .lean();
  ```

---

### **Part 2: Designing Relationships in MongoDB (The Right Way)**

* **Goal:** Learn how to design efficient relationships between collections.

* **Relationship Types:**

  1. **One-to-One** → Use *Embedding* (e.g., user profile inside a user document).
  2. **One-to-Many** → Use *Referencing* (e.g., a user has multiple posts).
  3. **Many-to-Many** → Use *Arrays of references* (e.g., students and courses).

* **Best Practice:**

  * Use **Embedding** for small, tightly coupled data.
  * Use **Referencing** for large or reusable data.

---

### **Part 3: Understanding Indexes in MongoDB**

* **Goal:** Improve query performance using indexes.
* **Concepts:**

  * What an **index** is and how it speeds up queries.
  * Creating indexes with Mongoose:

    ```js
    userSchema.index({ email: 1 }); // 1 for ascending, -1 for descending
    ```
  * Checking query performance:

    ```js
    db.users.find({ email: "test@example.com" }).explain("executionStats");
    ```
  * Common index types: **Single Field**, **Compound**, **Text**.

---

### **Part 4: Practical MongoDB Performance Tips**

* **Performance Best Practices:**

  * Use `.lean()` for `GET` requests.
  * Implement pagination with `limit` and `skip`.
  * Use **projection** to return only necessary fields.
  * Avoid heavy `.populate()` chains.
  * Add indexes to frequently queried fields.
  * Use **caching** (e.g., Redis) for expensive queries.

* **Example:**

  ```js
  const posts = await Post.find({}, 'title author')
    .limit(10)
    .skip(20)
    .lean();
  ```

---

### **Part 5: Streams in Node.js — Reading and Writing Large Files**

* **Goal:** Learn how to work with large files efficiently using streams instead of loading entire files into memory.
* **Key Concepts:**

  * What **Streams** are and why they’re useful.
  * Using:

    ```js
    fs.createReadStream()
    fs.createWriteStream()
    ```
  * Handling stream events:

    * `data` — when a chunk is received
    * `end` — when reading finishes
    * `error` — when an error occurs
  * Using `.pipe()` to connect streams:

    ```js
    const fs = require('fs');
    fs.createReadStream('input.txt').pipe(fs.createWriteStream('output.txt'));
    ```

---

### **BONUS Part (Included in My Study)**

#### **Real-World Use Cases for Streams in Node.js**

* **Applications:**

  * Video or audio streaming servers.
  * Reading or processing large datasets (CSV, JSON, etc.).
  * Building download/upload APIs.
  * Uploading directly to cloud storage (e.g., AWS S3) without local storage.
  * Building real-time logging or monitoring systems that process continuous data flows.

---

