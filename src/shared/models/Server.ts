import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import loger from 'morgan';

import { connectDB } from '../../config/mongodb';
import userRouter from '../../modules/users/infraestructure/routes/user.routes';
import authRouter from '../../modules/users/infraestructure/routes/auth.routes';
import circuloRouter from '../../modules/circulos/infraestructure/routes/circulo.routes';
import childrenRouter from '../../modules/children/infraestructure/routes/children.routes';
import submisionRouter from '../../modules/submision/infraestructure/routes/submision.routes';

export default class Server {
	private app: Application;
	private port: string;
	private apiPath = {
		users: '/api/users',
		auth: '/api/auth',
		circulo: '/api/circulos',
		children: '/api/children',
		submision: '/api/submision',
	};

	constructor() {
		this.app = express();
		this.port = process.env.PORT || '8000';

		this.middlewares();
		this.routes();
		this.connectBD();
	}

	connectBD() {
		connectDB();
	}
	middlewares() {
		this.app.use(cors());
		this.app.use(helmet());
		this.app.use(loger('dev'));
		this.app.use(express.json());

		this.app.use(express.static('public'));
	}

	routes() {
		this.app.use(this.apiPath.users, userRouter);
		this.app.use(this.apiPath.auth, authRouter);
		this.app.use(this.apiPath.circulo, circuloRouter);
		this.app.use(this.apiPath.children, childrenRouter);
		this.app.use(this.apiPath.submision, submisionRouter);
	}

	listen() {
		this.app.listen(this.port, () => {
			console.log(`Server runing on port ${this.port} 🚀🚀🚀`);
		});
	}
}
