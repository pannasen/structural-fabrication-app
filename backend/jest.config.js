module.exports = {
	testEnvironment: 'node',
	reporters: [
		'default',
		['jest-junit', { outputDirectory: 'test-results', outputName: 'junit.xml' }]
	],
	coverageDirectory: 'coverage',
	collectCoverageFrom: ['src/**/*.js', '!src/server.js']
};