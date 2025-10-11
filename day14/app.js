import express from 'express';

import authRoutes from './routes/auth.Routes.js';
import userRoutes from './routes/user.Routes.js';

import errorHnadler from './middleware/errorHandeler.js';

import helmet from 'helmet';
import mongoSanitize  from 'express-mongo-sanitize';
import rateLimit from 'express-rate-limit';
import cookieParser from 'cookie-parser';

const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

app.use(limiter);
app.use(helmet());
app.use(cookieParser());
app.use(mongoSanitize());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', authRoutes);
app.use('/user', userRoutes);

app.use(errorHnadler);
export default app;
