import request from 'supertest';
import server from '../test_support/server';

const SUCCESS = 200;

describe('API', () => {
  it('Server is available', async () => {
    const response = await request(await server).get('/api/v1/healthz');

    expect(response.statusCode).toBe(SUCCESS);
    expect(response.body.status).toBe('ok');
  });
});
