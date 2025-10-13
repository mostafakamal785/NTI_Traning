
---

## 🗓️ **Day 16: Team Project — Audio Library Sharing API**

### 🎯 **Part 1: Team Project Overview**

This day was focused entirely on **team collaboration and full-stack backend development**.
We built a **complete backend API** for an **Audio Library Sharing App**, where users can upload, manage, and stream audio content such as **audiobooks**, **lectures**, and **podcasts**.

This was a **backend-only project**, tested exclusively using **Postman**, and developed collaboratively using **Git and GitHub**.

---

## 🌟 **Project Overview**

The project aimed to simulate a real-world backend system that handles **user authentication**, **file uploads**, **audio streaming**, and **role-based access control**.

We followed an **MVC architecture** for clean structure and maintainability.

---

## 🎓 **Learning Goals**

* Implement **JWT-based authentication** with role-based authorization (`admin`, `user`)
* Use **Express.js** and **Mongoose** to create a modular backend
* Manage **file uploads** using `multer`
* Protect routes using **middleware**
* Serve and stream **audio files** using Node.js `fs.createReadStream()`
* Organize routes, controllers, and middleware effectively
* Handle **validation**, **errors**, and **security** globally
* Practice **team collaboration** using Git and GitHub

---

## 🏗️ **Project Architecture**

```
Audio-Library-API/
│
├── controllers/      # All route logic
├── models/           # Mongoose models
├── routes/           # Express route definitions
├── middlewares/      # Auth, validation, error handlers
├── uploads/          # Stored audio and image files
├── utils/            # Helper functions
├── config/           # Environment and DB setup
├── server.js         # Entry point
└── .env              # Environment variables
```

---

## 🧩 **Main Features**

### ✅ **Authentication (Users & Admins)**

**Endpoints:**

* `POST /api/register` — Create a new user (signup)
* `POST /api/login` — Log in and get a JWT token

**Implementation Details:**

* Passwords hashed with **bcrypt**
* JWT tokens generated with **jsonwebtoken**
* Role-based access control via middleware

**Validation (express-validator):**

* `name`: not empty, min length 2
* `email`: must be valid
* `password`: min length 6, must contain at least one number or special character
* `role`: optional (`user` | `admin`)

---

### 👤 **User Profile**

**Endpoints:**

* `GET /api/profile` — View user details
* `PUT /api/profile` — Update name or profile picture

**Validation:**

* `name`: optional, min length 2

Files handled with **multer** (profile pictures stored in `/uploads/profile-pics`).

---

### 🎧 **Audio Upload & Management**

**Endpoints:**

* `POST /api/audio` — Upload audio + cover image + metadata
* `GET /api/audio` — List public audio files
* `GET /api/audio/mine` — List user’s own audio files
* `GET /api/audio/stream/:id` — Stream audio via `fs.createReadStream`
* `PUT /api/audio/:id` — Update audio metadata
* `DELETE /api/audio/:id` — Delete own audio file

**Validation Rules:**

* `title`: required, min length 3
* `genre`: must be from an allowed list (`Education`, `Motivation`, `Podcast`, etc.)
* `isPrivate`: must be boolean

Files uploaded using **multer** with file type checks (only `.mp3` or `.m4a`).

---

### 🧑‍💼 **Admin Tools**

**Endpoints:**

* `GET /api/admin/audios` — View all audios (private & public)
* `DELETE /api/admin/audio/:id` — Delete any user’s audio

**Validation:**

* `:id` must be a valid MongoDB ObjectId

Admins can manage global content using **protected admin routes**.

---

### ⚠️ **Global Error Handling**

All routes use a **centralized error handler** to ensure consistent responses.

**Error Types Handled:**

* Validation errors (from `express-validator`)
* Authentication errors (JWT, missing token)
* Multer upload errors (invalid file types)
* Mongoose validation or DB errors
* Unexpected runtime errors

**Example:**

```js
app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || 'Server Error',
  });
});
```

---

## 🤝 **Teamwork & Collaboration**

* Worked in a **team of 8 members** using GitHub for collaboration
* Assigned clear roles: backend logic, validation, testing, and documentation
* Used **branches and pull requests** to manage code
* Practiced real-world **team communication**, debugging, and review cycles

---

## 🚀 **Key Takeaways**

* Built a **production-style Express + MongoDB API** from scratch
* Practiced **JWT-based auth**, **file handling**, and **streaming**
* Learned how to organize a project following the **MVC pattern**
* Experienced **team workflow**, Git conflict resolution, and peer review

---

