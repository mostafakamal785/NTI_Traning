````markdown
## 📅 Day 9: Building Models with Mongoose  

---

### 🧩 Part 1: Mongoose Setup and Introduction
- Installed and configured **Mongoose** to work as an ODM (Object Data Modeling) library for MongoDB.  
- Mongoose provides a **schema-based structure** for defining models, making it easier to enforce consistency.  
  ```bash
  npm install mongoose
````

* Connected Node.js to MongoDB using Mongoose:

  ```js
  import mongoose from 'mongoose';

  mongoose.connect('mongodb://localhost:27017/myDatabase')
    .then(() => console.log('✅ MongoDB Connected'))
    .catch(err => console.error('❌ Connection Error:', err));
  ```

---

### 🧱 Part 2: Defining Schemas and Models in Mongoose

* Learned how to define a **Schema** — a blueprint for documents in a MongoDB collection.
* Created a **Model** to interact with the database using Mongoose methods.

  ```js
  import mongoose from 'mongoose';

  const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true },
    age: { type: Number, min: 0 },
    createdAt: { type: Date, default: Date.now }
  });

  const User = mongoose.model('User', userSchema);
  export default User;
  ```
* The **Schema** defines structure and validation.
* The **Model** provides methods like `find()`, `save()`, `updateOne()`, `deleteOne()`.

---

### ⚙️ Part 3: Model Methods and Middleware in Mongoose

* Added **custom instance methods** to a schema:

  ```js
  userSchema.methods.greet = function() {
    console.log(`Hello, ${this.name}!`);
  };
  ```
* Used **pre** and **post middleware hooks** for actions before/after certain operations (e.g., saving).

  ```js
  userSchema.pre('save', function(next) {
    console.log('Before saving user...');
    next();
  });
  ```
* Middleware types learned:

  * **Document middleware** (`save`, `validate`)
  * **Query middleware** (`find`, `update`)
  * **Aggregate middleware**

---

### 🧠 Part 4: Express + Mongoose CRUD Operations

* Integrated Mongoose models into an Express application to perform CRUD operations.
* Example routes:

  ```js
  import express from 'express';
  import User from './models/User.js';

  const app = express();
  app.use(express.json());

  // CREATE
  app.post('/users', async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  });

  // READ
  app.get('/users', async (req, res) => {
    const users = await User.find();
    res.json(users);
  });

  // UPDATE
  app.put('/users/:id', async (req, res) => {
    const updated = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  });

  // DELETE
  app.delete('/users/:id', async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.sendStatus(204);
  });

  app.listen(3000, () => console.log('Server running on port 3000'));
  ```
* Practiced CRUD testing using **Postman** or **Thunder Client**.
* Understood how Mongoose simplifies data validation, relationships, and schema management.

---

```
```
