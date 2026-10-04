import path from 'node:path';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import mainController from './controllers/mainController.js';
import errorController from './controllers/errorController.js';

const projectRoot = process.cwd();
const app = express();
const allowedOrigins = process.env.CORS_ORIGIN
	?.split(',')
	.map((origin) => origin.trim())
	.filter(Boolean);

app.use(cors(allowedOrigins ? { origin: allowedOrigins } : undefined));
app.use(helmet());

app.set('views', path.join(projectRoot, 'src', 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(projectRoot, 'src', 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', mainController.home);
app.get('/projects', mainController.getProjects);
app.use(errorController.error404);

const isMainModule = process.argv[1]
	&& path.resolve(process.argv[1]) === path.join(projectRoot, 'src', 'app.js');

if (isMainModule) {
	const port = Number(process.env.PORT) || 3000;
	app.listen(port, () => {
		console.log(`Server is running on http://localhost:${port}`);
	});
}

export default app;