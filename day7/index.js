import express from 'express';
import multer from 'multer';
import fs from 'fs';

const app = express();

app.use(express.json());

app.use(express.urlencoded());
app.use(express.static('/day7/public'));
const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: function (req, file, cb) {
    const allowedTypes = ['image/jpeg', 'image/png'];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('invalide type.'));
    }
  },
});

app.use(express.static('public'));

app.get('/files', (req, res) => {
  const { type } = req.query;
  const validTypes = ['pdf', 'docx'];
  if (req.query.type && !validTypes.includes(type)) {
    res.status(400).send('Invalid type parameter');
    return;
  }
  fs.readdir('uploads', (err, files) => {
    let result = files;
    if (type) {
      result = result.filter((file) => file.endsWith(`.${type}`));
    }
    res.json(result);
  });
});
app.post('/upload', upload.array('photos', 5), (req, res) => {
  console.log('done');
  res.send('file recived');
});
app.use((req, res) => {
  res.status(404).send('404: Page Not Found');
});

app.listen(3000);
