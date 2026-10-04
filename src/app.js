import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import mainController from './controllers/mainController.js';
import errorController from './controllers/errorController.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const allowedOrigins = process.env.CORS_ORIGIN
	?.split(',')
	.map((origin) => origin.trim())
	.filter(Boolean);

app.use(cors(allowedOrigins ? { origin: allowedOrigins } : undefined));
app.use(helmet());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', mainController.home);
app.get('/projects', mainController.getProjects);
app.use(errorController.error404);

const isMainModule = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);

if (isMainModule) {
	const port = Number(process.env.PORT) || 3000;
	app.listen(port, () => {
		console.log(`Server is running on http://localhost:${port}`);
	});
}

export default app;