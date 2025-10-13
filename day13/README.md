````markdown
## 📧 **Day 13: Sending Emails, Forgot Password & User-Based Authorization**

> 🎯 **Goal:** Implement **email functionality**, build a **secure password reset system**, and manage **user roles and permissions** for role-based authorization in Express applications.

---

### **Part 1: Sending Emails in Node.js Projects**

- **Goal:** Learn how to send transactional emails (verification, password reset, notifications) using **Nodemailer**.
- **Tool Used:** [Nodemailer](https://nodemailer.com/) — a Node.js module for sending emails easily.

- **Setup Example:**
  ```js
  import nodemailer from 'nodemailer';

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const sendMail = async (to, subject, html) => {
    await transporter.sendMail({
      from: `"My App" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html,
    });
  };

  export default sendMail;
````

* **Notes:**

  * Use **App Passwords** for Gmail (not your personal password).
  * Always store credentials in **.env**.
  * HTML emails can include branding or reset links.

---

### **Part 2: Forgot Password & Reset Password Flow (With Nodemailer + JWT Reset Token)**

* **Goal:** Allow users to reset their password securely without exposing sensitive data.

#### 🔹 **1. Forgot Password Request**

* User submits email → Verify user → Generate a short-lived **reset token** → Send email with reset link.

  ```js
  import jwt from 'jsonwebtoken';
  import sendMail from '../utils/sendMail.js';

  const forgotPassword = async (req, res) => {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const resetToken = jwt.sign({ id: user._id }, process.env.RESET_SECRET, { expiresIn: '15m' });
    const resetLink = `${process.env.CLIENT_URL}/reset-password/${resetToken}`;

    await sendMail(user.email, 'Password Reset', `<a href="${resetLink}">Click here to reset your password</a>`);
    res.json({ message: 'Password reset link sent to your email' });
  };
  ```

#### 🔹 **2. Reset Password**

* User clicks the link → Send new password → Verify token → Update password.

  ```js
  const resetPassword = async (req, res) => {
    const { token } = req.params;
    const { newPassword } = req.body;

    try {
      const decoded = jwt.verify(token, process.env.RESET_SECRET);
      const user = await User.findById(decoded.id);
      if (!user) return res.status(404).json({ message: 'User not found' });

      user.password = newPassword;
      await user.save();
      res.json({ message: 'Password has been reset successfully' });
    } catch (err) {
      res.status(400).json({ message: 'Invalid or expired token' });
    }
  };
  ```

* **Best Practices:**

  * Use a **short expiry time** for reset tokens (e.g., 10–15 minutes).
  * Do not reuse tokens.
  * Hash and store reset tokens in the database if needed for extra validation.

---

### **Part 3: Authorizing Users Based on User Roles**

* **Goal:** Restrict certain routes or actions based on user **roles** (e.g., admin, user, moderator).

* **Example:**

  ```js
  const authorizeRole = (role) => {
    return (req, res, next) => {
      if (req.user.role !== role) {
        return res.status(403).json({ message: 'Access denied: insufficient permissions' });
      }
      next();
    };
  };

  // Usage Example
  app.delete('/admin/delete-user/:id', auth, authorizeRole('admin'), async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'User deleted successfully' });
  });
  ```

* **Concepts Learned:**

  * **Authentication** = verifying who the user is.
  * **Authorization** = verifying what the user can do.
  * Role-based access can be extended using arrays (e.g., `['admin', 'manager']`).

---

✅ **Summary:**

* Integrated **email sending** using Nodemailer.
* Built a **secure forgot/reset password** workflow using **JWT reset tokens**.
* Implemented **role-based authorization** to control access for different user types.
* Strengthened overall application **security and user experience**.

---

```
```
