import mongoose from 'mongoose';
import { IChildren } from './../../domain/children.d';

const ChildrenSchema = new mongoose.Schema<IChildren>(
	{
		nameChildren: {
			type: String,
			required: true,
		},
		lastNameChildren: {
			type: String,
			required: true,
		},
		lastNameChildren2: {
			type: String,
			required: true,
		},
		noIdentity: {
			type: Number,
			unique: true,
			required: true,
			min: [11, 'El numero de Indentidad necesita minimo 11 caracteres'],
			max: [11, 'El numero de Indentidad necesita maximo 11 caracteres'],
		},
		age: {
			type: Number,
			required: true,
		},
		year_of_life: {
			type: Number,
			required: true,
		},
		sex: {
			type: String,
			required: true,
			enum: {
				values: ['masculino', 'masculino'],
				message: '{VALUE} no soportado',
			},
		},
		street: {
			type: String,
			required: true,
		},
		between: {
			type: String,
			required: true,
		},
		house: {
			type: String,
			required: true,
		},
		stair: {
			type: String,
			required: true,
		},
		locality: {
			type: String,
			required: true,
		},
		cPopular: {
			type: String,
			required: true,
		},
		municipality: {
			type: String,
			required: true,
		},
		province: {
			type: String,
			required: true,
		},
		status: {
			type: Boolean,
			default: true,
		},
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

export default mongoose.model<IChildren>('circulo', ChildrenSchema);
