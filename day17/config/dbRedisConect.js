import redis from 'redis';

const client = redis.createClient();

client
.connect()
.then(() => console.log('Redis connected'))
.catch((err) => console.error('Failed to connect Redis:', err));

client.on('error', (err) => {
  console.error('❌ Redis Error:', err);
});

export default client