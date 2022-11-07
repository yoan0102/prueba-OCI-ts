import mongoose from 'mongoose';
import { ICirculo } from './../../domain/circulo.d';

const CirculoSchema = new mongoose.Schema<ICirculo>(
	{
		no: {
			type: Number,
			unique: true,
			required: true,
		},
		name: {
			type: String,
			required: true,
		},
		capacidad_total: {
			type: Number,
			required: true,
		},
		normed_capacity2: {
			type: Number,
			required: true,
		},
		normed_capacity3: {
			type: Number,
			required: true,
		},
		normed_capacity4: {
			type: Number,
			required: true,
		},
		normed_capacity5: {
			type: Number,
			required: true,
		},
		normed_capacity6: {
			type: Number,
			required: true,
		},
		matricula_total: {
			type: Number,
			required: true,
		},
		matricula2: {
			type: Number,
			required: true,
		},
		matricula3: {
			type: Number,
			required: true,
		},
		matricula4: {
			type: Number,
			required: true,
		},
		matricula5: {
			type: Number,
			required: true,
		},
		matricula6: {
			type: Number,
			required: true,
		},
		porciento_asistencia2: {
			type: Number,
			required: true,
		},
		porciento_asistencia3: {
			type: Number,
			required: true,
		},
		porciento_asistencia4: {
			type: Number,
			required: true,
		},
		porciento_asistencia5: {
			type: Number,
			required: true,
		},
		porciento_asistencia6: {
			type: Number,
			required: true,
		},
		status: {
			type: Boolean,
			default: 1,
		},
		lat: {
			type: Number,
			required: true,
		},
		long: {
			type: Number,
			required: true,
		},
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

export default mongoose.model('circulo', CirculoSchema);
