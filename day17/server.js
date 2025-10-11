import app from './app.js';
import dotenv from 'dotenv';
import dbMongooseConect from './config/dbMongooseConect.js';
import dbRedisConect from './config/dbRedisConect.js';
dotenv.config();
const DATABASEURL = process.env.DATABASE_URL;
const PORT = process.env.PORT;
dbRedisConect;
dbMongooseConect(DATABASEURL);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
