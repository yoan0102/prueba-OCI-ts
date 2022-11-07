import mongoose, { Schema } from 'mongoose';
import { ISubmision } from '../../domain/submision';

const SubmisionSchema = new mongoose.Schema<ISubmision>(
	{
		noEntry: {
			type: Number,
			required: true,
		},
		type: {
			type: String,
			enum: ['nueva', 'traslado'],
			default: 'nueva',
		},
		social_case: {
			type: Boolean,
			default: false,
		},
		motive: {
			type: String,
		},
		status: {
			type: Boolean,
			default: true,
		},
		children: {
			type: [{ type: Schema.Types.ObjectId, ref: 'children' }],
			required: true,
		},
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

export default mongoose.model<ISubmision>('submision', SubmisionSchema);
