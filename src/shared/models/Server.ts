import express, { Application } from 'express'
import cors from 'cors'
import helmet from 'helmet';

import { connectDB } from '../../config/mongodb';
import userRouter from '../../modules/users/infraestructure/routes/user.routes'

export default class Server{
  private app: Application;
  private port: string;
  private apiPath = {
      users: '/api/users'
  }

  constructor(){
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
    // this.app.use(helmet());
    this.app.use(express.json());

    this.app.use(express.static('public'))
  }

  routes() {
    this.app.use(this.apiPath.users, userRouter);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server runing on port ${this.port} 🚀🚀🚀`);     
    })
  }
}