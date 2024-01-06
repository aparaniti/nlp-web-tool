const express = require('express');
const request = require('supertest');
const app = require('./app.test.js'); 
describe('API Endpoint Tests', () => {
  it('POST /analyze should analyze text', async () => {
    const sampleData = {
      text: 'Sample text for analysis',
      lang: 'en',
    };

    const response = await request(app)
      .post('/analyze')
      .send(sampleData)
      .set('Accept', 'application/json');

    expect(response.status).toBe(200);

    expect(response.body).toHaveProperty('model');
    expect(response.body).toHaveProperty('score_tag');
    expect(response.body).toHaveProperty('agreement');
    expect(response.body).toHaveProperty('subjectivity');
    expect(response.body).toHaveProperty('confidence');
    expect(response.body).toHaveProperty('irony');
  });
});