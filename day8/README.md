````markdown
## 📅 Day 8: Introduction to Databases, NoSQL & MongoDB  

---

### 🧠 Part 1: Database Fundamentals
- Learned the difference between **Databases**, **Tables/Collections**, and **Records/Documents**.  
- Understood two main types of databases:
  - **SQL (Relational)** → Structured data, fixed schema (e.g., MySQL, PostgreSQL).  
  - **NoSQL (Non-Relational)** → Flexible schema, document-based (e.g., MongoDB).  
- Compared key concepts:  
  | Concept | SQL | NoSQL |
  |----------|------|--------|
  | Structure | Tables & Rows | Collections & Documents |
  | Schema | Fixed | Dynamic |
  | Joins | Supported | Usually avoided |
  | Format | Tabular | JSON-like |

---

### 🧩 Part 2: Installing MongoDB (Locally)
- Installed **MongoDB Community Edition** on the system.  
- Learned how to start and stop the MongoDB service manually or automatically.  
- Verified installation via terminal:  
  ```bash
  mongod --version
  mongo
````

* Understood MongoDB’s folder structure:

  * `/data/db` → default data directory
  * `/bin` → executables (mongod, mongosh)

---

### 🍃 Part 3: Introduction to MongoDB

* MongoDB is a **document-oriented database** where data is stored as **BSON** (Binary JSON).
* Each record = a **document**, similar to a JSON object.
* Basic CRUD operations via shell:

  ```js
  db.users.insertOne({ name: "Mostafa", age: 21 });
  db.users.find();
  db.users.updateOne({ name: "Mostafa" }, { $set: { age: 22 } });
  db.users.deleteOne({ name: "Mostafa" });
  ```

---

### 🗂️ Part 4: Collections and Documents in Detail

* **Collections** → groups of related documents (like tables).
* **Documents** → key-value pairs in JSON-like format.
* Flexible schema allows different documents in the same collection to have different fields.

  ```json
  {
    "name": "Ahmed",
    "email": "ahmed@example.com",
    "skills": ["Node.js", "React"]
  }
  ```

---

### 🧭 Part 5: MongoDB Compass Walkthrough

* Installed and explored **MongoDB Compass**, the official GUI tool.
* Connected to local MongoDB instance using the default URI:

  ```
  mongodb://localhost:27017
  ```
* Performed visual CRUD operations:

  * Create / Insert documents
  * Filter data using queries
  * View database and collection structure

---

### 💻 Part 6: Mongo Shell (mongosh)

* Used **mongosh** to interact with databases via terminal commands.
* Practiced commands like:

  ```bash
  show dbs
  use myDatabase
  show collections
  db.users.find().pretty()
  ```
* Learned how to switch databases and format output.

---

### 🔗 Part 7: Connecting MongoDB to Node.js & Working with Environment Variables and .env

* Installed **Mongoose** to simplify MongoDB operations in Node.js:

  ```bash
  npm install mongoose dotenv
  ```
* Created a `.env` file to store sensitive data (like database URI).

  ```env
  MONGO_URI=mongodb://localhost:27017/myDatabase
  ```
* Connected Node.js to MongoDB:

  ```js
  import mongoose from 'mongoose';
  import dotenv from 'dotenv';
  dotenv.config();

  mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error(err));
  ```

---

```
```
