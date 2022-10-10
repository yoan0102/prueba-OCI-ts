import dotenv from 'dotenv'
import Server from './shared/models/Server'

dotenv.config();

const server = new Server();

server.listen();

