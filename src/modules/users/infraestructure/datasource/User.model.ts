import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import { IUser } from 'modules/users/domain/users';

const UserSchema = new mongoose.Schema<IUser>(
	{
		nick_name: {
			type: String,
			unique: true,
			required: true,
		},
		first_name: {
			type: String,
			required: true,
		},
		last_name: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
		position: {
			type: String,
			required: true,
		},
		role: {
			type: String,
			enum: ['ADMIN_ROLE', 'USER_ROLE'],
			default: 'USER_ROLE',
		},
		status: {
			type: Boolean,
			default: 1,
		},
		razon_remove: {
			type: String,
		},
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

UserSchema.methods.toJSON = function () {
	// eslint-disable-next-line prefer-const
	let user = this.toObject();
	delete user.password;
	return user;
};

UserSchema.methods.comparePasswords = function (password: string) {
	return bcrypt.compareSync(password, this.password);
};

UserSchema.pre('save', async function (next) {
	// eslint-disable-next-line prefer-const
	let user = this;
	if (!user.isModified('password')) {
		return next();
	}

	const salt = bcrypt.genSaltSync(10);
	const hashedPassword = bcrypt.hashSync(user.password, salt);
	user.password = hashedPassword;
	next();
});

export default mongoose.model<IUser>('user', UserSchema);
