const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

const OUTPUT_DIR = path.resolve(__dirname, '..', 'docs', 'reports');
const OUTPUT_FILE = path.join(OUTPUT_DIR, `test-report-${Date.now()}.zip`);

async function ensureDir(dir) {
	await fs.promises.mkdir(dir, { recursive: true });
}

async function zipReports() {
	await ensureDir(OUTPUT_DIR);
	const output = fs.createWriteStream(OUTPUT_FILE);
	const archive = archiver('zip', { zlib: { level: 9 } });

	return new Promise((resolve, reject) => {
		output.on('close', () => resolve(OUTPUT_FILE));
		archive.on('error', reject);
		archive.pipe(output);

		const candidates = [
			path.resolve(__dirname, '..', 'backend', 'test-results'),
			path.resolve(__dirname, '..', 'backend', 'coverage'),
			path.resolve(__dirname, '..', 'frontend', 'test-results'),
			path.resolve(__dirname, '..', 'frontend', 'coverage'),
			path.resolve(__dirname, '..', 'integration', 'test-results'),
			path.resolve(__dirname, '..', 'integration', 'coverage')
		];

		for (const dir of candidates) {
			if (fs.existsSync(dir)) {
				archive.directory(dir, path.basename(dir));
			}
		}

		archive.finalize();
	});
}

zipReports()
	.then((zipPath) => {
		console.log(`Bundle created: ${zipPath}`);
	})
	.catch((err) => {
		console.error('Failed to bundle reports', err);
		process.exit(1);
	});