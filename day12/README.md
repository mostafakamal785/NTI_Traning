````markdown
## 🔁 **Day 12: Refresh Token & Authentication Flow**

> 🎯 **Goal:** Learn how to build a **secure authentication system** using **Access Tokens** and **Refresh Tokens**, and how to store them safely with **HTTP-only cookies** for maximum protection.

---

### **Part 1: Refresh Tokens and HTTP-Only Cookies**

- **Problem:**  
  Access Tokens (JWTs) usually expire quickly for security reasons (e.g., 15–30 minutes).  
  When they expire, the user must log in again — which is bad for user experience.

- **Solution:**  
  Use **Refresh Tokens** to issue new Access Tokens **without forcing the user to log in again**.

- **Key Concepts:**
  - **Access Token:** Short-lived; used for authorization (included in headers).  
  - **Refresh Token:** Long-lived; stored securely to get new access tokens.  
  - **HTTP-only Cookie:** A special cookie that **cannot be accessed by JavaScript**, protecting tokens from XSS attacks.

- **Example Implementation:**
  ```js
  import jwt from 'jsonwebtoken';
  import express from 'express';
  import cookieParser from 'cookie-parser';

  const app = express();
  app.use(cookieParser());
  app.use(express.json());

  // Generate Tokens
  const generateAccessToken = (user) => {
    return jwt.sign({ id: user._id }, process.env.ACCESS_SECRET, { expiresIn: '15m' });
  };

  const generateRefreshToken = (user) => {
    return jwt.sign({ id: user._id }, process.env.REFRESH_SECRET, { expiresIn: '7d' });
  };

  // Send Refresh Token in an HTTP-only Cookie
  const sendRefreshToken = (res, token) => {
    res.cookie('refreshToken', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      path: '/api/auth/refresh',
    });
  };
````

* **Why HTTP-only Cookies?**

  * They are not accessible from JavaScript (`document.cookie`).
  * They prevent **XSS** (Cross-Site Scripting) token theft.
  * Automatically sent with requests from the same origin.

---

### **Part 2: Secure Auth Flow with Access & Refresh Tokens: Signup, Login, and Logout**

* **Goal:** Implement the full authentication flow with both tokens.

#### 🔹 **1. Signup**

* User registers → Save credentials (hashed) → Generate both tokens.
* Example:

  ```js
  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);
  sendRefreshToken(res, refreshToken);
  res.json({ accessToken });
  ```

#### 🔹 **2. Login**

* Verify email and password → Send both tokens (access + refresh).
* Example:

  ```js
  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password)))
    return res.status(401).json({ message: 'Invalid credentials' });

  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);
  sendRefreshToken(res, refreshToken);
  res.json({ accessToken });
  ```

#### 🔹 **3. Access Protected Routes**

* Access Token is sent in headers:
  `Authorization: Bearer <token>`
* Verify the token in middleware before accessing the route.

#### 🔹 **4. Refresh Token Route**

* When the access token expires, use the refresh token (from the cookie) to issue a new one.

  ```js
  app.post('/api/auth/refresh', (req, res) => {
    const token = req.cookies.refreshToken;
    if (!token) return res.status(401).json({ message: 'No refresh token found' });

    jwt.verify(token, process.env.REFRESH_SECRET, (err, user) => {
      if (err) return res.status(403).json({ message: 'Invalid refresh token' });
      const newAccessToken = generateAccessToken({ id: user.id });
      res.json({ accessToken: newAccessToken });
    });
  });
  ```

#### 🔹 **5. Logout**

* Clear the cookie and optionally invalidate the refresh token (e.g., remove it from Redis or DB).

  ```js
  app.post('/api/auth/logout', (req, res) => {
    res.clearCookie('refreshToken', { path: '/api/auth/refresh' });
    res.json({ message: 'Logged out successfully' });
  });
  ```

---

✅ **Summary:**

* Implemented **Access + Refresh Token** authentication system.
* Stored refresh tokens securely in **HTTP-only cookies**.
* Built endpoints for **signup**, **login**, **refresh**, and **logout**.
* Achieved a balance between **security** and **user experience** by maintaining stateless JWT auth flow.

---

```
```
