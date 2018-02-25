import request from 'supertest';
import server from '../src/server';

describe('POST /graphql', () => {
  it('should return 200 OK', () => {
    return request(server)
      .post('/graphql')
      .expect(200);
  });
});
