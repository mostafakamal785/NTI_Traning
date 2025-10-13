```markdown
## 🔐 **Day 11: MVC, API Security & Authentication**

> 🎯 **Goal:** Learn how to organize your Express app using the **MVC architecture**, secure user data through **password hashing**, and implement **authentication** with **JWT** (JSON Web Tokens).

---

### **Part 1: Project Structure & Separation of Concerns in Express Projects**

- **Goal:** Understand how to structure large Express applications for maintainability and scalability.
- **Concepts:**
  - **MVC Pattern** → Model, View, Controller  
    - **Model:** Handles database schemas and logic.  
    - **View:** (Optional in APIs) Handles front-end templates or responses.  
    - **Controller:** Contains route logic and connects Models with Routes.
  - **Separation of Concerns:** Each layer handles a single responsibility.

- **Example Folder Structure:**
```

/project-root
├── /config
│   └── db.js
├── /controllers
│   └── userController.js
├── /models
│   └── userModel.js
├── /routes
│   └── userRoutes.js
├── /middlewares
│   └── authMiddleware.js
├── server.js
└── package.json

````

- **Benefits:**
- Easier debugging and scaling.
- Clear code organization.
- Reusable components and cleaner imports.

---

### **Part 2: Password Hashing in Node.js using Bcrypt**

- **Goal:** Protect user passwords before saving them to the database.
- **Why Hash?**
- Storing plain-text passwords is insecure.
- Hashing ensures even developers cannot read user passwords.

- **Steps:**
1. Install bcrypt:  
   ```bash
   npm install bcrypt
   ```
2. Hash passwords before saving:
   ```js
   import bcrypt from 'bcrypt';

   userSchema.pre('save', async function(next) {
     if (!this.isModified('password')) return next();
     this.password = await bcrypt.hash(this.password, 10);
     next();
   });
   ```
3. Compare passwords during login:
   ```js
   const isMatch = await bcrypt.compare(password, user.password);
   ```

---

### **Part 3: Building a Signup Feature in Node.js with Express & Mongoose**

- **Goal:** Create a secure signup route that stores user data and hashes passwords.
- **Example:**
```js
import express from 'express';
import User from '../models/userModel.js';

const router = express.Router();

router.post('/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = new User({ name, email, password });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
````

* **Key Notes:**

  * Use validation for fields (email format, password strength).
  * Handle duplicate emails gracefully.
  * Always hash before saving.

---

### **Part 4: JSON Web Tokens (JWT)**

* **Goal:** Implement authentication with stateless tokens.

* **Concepts:**

  * **JWT** = A compact, URL-safe token used to verify a user’s identity.
  * **Structure:** `Header.Payload.Signature`
  * Tokens are signed using a **secret key**, not encrypted.

* **Steps:**

  1. Install JWT:

     ```bash
     npm install jsonwebtoken
     ```
  2. Generate a token:

     ```js
     import jwt from 'jsonwebtoken';

     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
       expiresIn: '1d',
     });
     ```
  3. Verify a token:

     ```js
     const decoded = jwt.verify(token, process.env.JWT_SECRET);
     ```
  4. Use middleware for protected routes:

     ```js
     const auth = (req, res, next) => {
       const token = req.header('Authorization')?.split(' ')[1];
       if (!token) return res.status(401).json({ message: 'Access denied' });

       try {
         const decoded = jwt.verify(token, process.env.JWT_SECRET);
         req.user = decoded;
         next();
       } catch (err) {
         res.status(400).json({ message: 'Invalid token' });
       }
     };
     ```

---

✅ **Summary:**

* Organized Express app using **MVC**.
* Secured passwords using **bcrypt**.
* Built a functional **signup API**.
* Implemented authentication with **JWT** for real-world API protection.

---

```
```
