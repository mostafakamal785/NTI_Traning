
---

### 🗓️ **Day 14: Request Validation**

**📘 Topics Covered:**

* **Part 1:** Request Validation with `express-validator`

---

### 🧠 **What I Learned**

Today, I explored how to handle **input validation and sanitization** in Express applications using the **`express-validator`** library — a crucial part of building secure and reliable APIs.

I learned how to:

* Use the `check()` and `body()` functions from `express-validator` to validate incoming data in routes.
* Chain multiple validations (e.g., checking format, length, and required fields).
* Handle validation errors gracefully using the `validationResult()` method.
* Keep the validation logic **separate from controllers** for better maintainability.
* Prevent common issues like SQL injection, XSS, and broken data flow through strict validation rules.

---

### ⚙️ **Implementation Details**

1. **Installation**

   ```bash
   npm install express-validator
   ```

2. **Basic Example**

   ```js
   import express from 'express';
   import { body, validationResult } from 'express-validator';

   const app = express();
   app.use(express.json());

   app.post('/signup', [
     body('email').isEmail().withMessage('Invalid email address'),
     body('password')
       .isLength({ min: 6 })
       .withMessage('Password must be at least 6 characters long'),
   ], (req, res) => {
     const errors = validationResult(req);
     if (!errors.isEmpty()) {
       return res.status(400).json({ errors: errors.array() });
     }

     res.send('Signup successful!');
   });
   ```

3. **Sanitization Example**

   ```js
   body('email').normalizeEmail(),
   body('username').trim().escape()
   ```

4. **Organizing Validation Logic**

   * Moved validations into a dedicated file: `/middlewares/validators/userValidator.js`
   * Imported them into routes for cleaner and more modular code.

---

### 🛠️ **Tools & Concepts**

* **`express-validator`** — declarative validation library for Express.
* **Middleware pattern** — reusable validation chains before reaching the controller.
* **Error handling** — capturing invalid input with `validationResult()`.
* **Data sanitization** — ensuring input is clean and formatted.

---

### 🚀 **Key Takeaways**

* Validation must happen **before** business logic or database operations.
* Always send **clear and consistent error messages** to clients.
* Keeping validators modular and reusable improves project scalability.
* Sanitization is as important as validation to prevent vulnerabilities.

---
