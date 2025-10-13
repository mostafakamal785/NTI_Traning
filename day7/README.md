````markdown
## 📅 Day 7: CRUD and File Uploads in Express  

---

### 🗂️ Part 1: Serving Static Files in Express.js
- Learned how to serve static assets like images, CSS, and JavaScript files.  
- Used **express.static()** middleware to make files publicly accessible.  
  ```js
  const express = require('express');
  const app = express();
  app.use(express.static('public'));
````

* Example: `/public/styles.css` becomes accessible via `/styles.css`.

---

### 🧭 Part 2: Using the path Module in Node.js and Express

* Used Node’s **path** module to handle and resolve file paths safely.

  ```js
  const path = require('path');
  const filePath = path.join(__dirname, 'public', 'index.html');
  ```
* Ensures compatibility across operating systems when serving files.

---

### 📤 Part 3: File Uploads with Multer

* Installed and configured **Multer** to handle file uploads in Express.

  ```bash
  npm install multer
  ```

  ```js
  const multer = require('multer');
  const upload = multer({ dest: 'uploads/' });

  app.post('/upload', upload.single('file'), (req, res) => {
    res.send(`File uploaded: ${req.file.originalname}`);
  });
  ```
* Understood:

  * `single()` for one file
  * `array()` or `fields()` for multiple uploads
* Practiced validating and renaming uploaded files.

---

### ⚙️ Part 4: CRUD Operations Overview in Web Development

* Reviewed the four main operations in any data-driven application:

  * **Create** → Add new data (POST)
  * **Read** → Retrieve existing data (GET)
  * **Update** → Modify existing data (PUT/PATCH)
  * **Delete** → Remove data (DELETE)
* Understood how REST APIs map these operations to HTTP methods.

---

### 🧪 Part 5: Setting Up JSON Server for Testing

* Installed **json-server** to simulate a real REST API without a database.

  ```bash
  npm install -g json-server
  json-server --watch db.json --port 5000
  ```
* Created a simple `db.json` file:

  ```json
  {
    "users": [
      { "id": 1, "name": "Mostafa" },
      { "id": 2, "name": "Ahmed" }
    ]
  }
  ```
* Used it to test API routes and CRUD operations.

---

### 🧱 Part 6: Building CRUD in Express (Without a Real Database — Using json-server)

* Implemented CRUD routes in Express to interact with the mock `db.json`.

  ```js
  app.get('/users', (req, res) => { /* Read */ });
  app.post('/users', (req, res) => { /* Create */ });
  app.put('/users/:id', (req, res) => { /* Update */ });
  app.delete('/users/:id', (req, res) => { /* Delete */ });
  ```
* Practiced sending requests using **Postman** or **Thunder Client**.
* Learned how CRUD logic would later connect to a real database.

---

### 📄 Part 7: JSON Structure and Best Practices

* Reviewed proper JSON formatting:

  * Keys must be in double quotes
  * No trailing commas
  * Must represent structured, consistent data
* Followed best practices:

  * Use **camelCase** for keys
  * Avoid deeply nested objects
  * Keep data clean and meaningful

  ```json
  {
    "id": 3,
    "name": "Sara",
    "email": "sara@example.com"
  }
  ```

---

```
```
