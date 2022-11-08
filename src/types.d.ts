import { Request } from 'express';
import { JwtPayload } from 'jsonwebtoken';
declare interface IRequest extends Request {
	uid: string | JwtPayload;
}
