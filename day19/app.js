import express from 'express';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';

import userRoutes from './routes/user.js';
import bookRoutes from './routes/Books.js';

const app = express();
app.use(express.json());

// Routes
app.use( '/users', userRoutes);
app.use('/books',bookRoutes);

// Swagger UI
const swaggerDocument = YAML.load('./openapi.yaml');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = process.env.PORT || 3000;
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
}

export default app;
