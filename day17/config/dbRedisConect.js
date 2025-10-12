import redis from 'redis';
import logger from '../middleware/logger.js';

const client = redis.createClient();

client
.connect()
.then(() => logger.info("redis connect succed"))
.catch((err) => logger.error('Failed to connect Redis:', err));

client.on('error', (err) => {
  console.error('❌ Redis Error:', err);
});

export default client