import { jest } from '@jest/globals';
import request from 'supertest';

// Mock the User model BEFORE importing app
jest.unstable_mockModule('./models/User.js', () => ({
  default: { findById: jest.fn() },
}));

const { default: app } = await import('./app.js');
const { default: User } = await import('./models/User.js');

describe('GET /users/:id', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('✅ should return user data when found', async () => {
    const fakeUser = { name: 'Omar', email: 'omar@mail.com' };
    User.findById.mockResolvedValue(fakeUser);

    const res = await request(app).get('/users/123');

    expect(User.findById).toHaveBeenCalledWith('123');
    expect(res.status).toBe(200);
    expect(res.body).toEqual(fakeUser);
  });

  test('❌ should return 404 if user not found', async () => {
    User.findById.mockResolvedValue(null);

    const res = await request(app).get('/users/999');

    expect(res.status).toBe(404);
    expect(res.body).toEqual({ error: 'User not found' });
  });

  test('⚠️ should return 500 if an error occurs', async () => {
    User.findById.mockRejectedValue(new Error('DB failed'));

    const res = await request(app).get('/users/500');

    expect(res.status).toBe(500);
    expect(res.body).toEqual({ error: 'Server error' });
  });
});
