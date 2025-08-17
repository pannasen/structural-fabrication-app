const request = require('supertest');
const app = require('../../backend/src/app');

describe('Integration: /health', () => {
	it('returns ok', async () => {
		const response = await request(app).get('/health');
		expect(response.status).toBe(200);
		expect(response.body).toEqual({ status: 'ok' });
	});
});