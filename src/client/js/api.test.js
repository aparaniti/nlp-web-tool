const request = require('supertest');
const app = require('../../src/server/index.js'); 

describe('API Endpoint Tests', () => {
  it('should analyze text', async () => {
    const sampleData = {
      text: 'Your sample text',
      lang: 'en', 
    };

    const response = await request(app)
      .post('/analyze')
      .send(sampleData);

    expect(response.status).toBe(200); 
    expect(response.body).toHaveProperty('yourExpectedProperty'); 
  });
});