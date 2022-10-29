import mongoose from 'mongoose';
import { IRole } from '../../domain/role';

const RoleSchema = new mongoose.Schema<IRole>(
	{
		role: {
			type: String,
		},
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

export default mongoose.model('role', RoleSchema);
