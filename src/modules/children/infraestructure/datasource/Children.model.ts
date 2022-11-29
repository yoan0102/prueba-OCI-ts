import mongoose, { Schema } from 'mongoose';
import { IChildren } from './../../domain/children.d';
import { IParent, TypeParent } from '../../domain/parents';

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
				values: ['masculino', 'femenino'],
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
		},
		stair: {
			type: String,
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
		},
		status: {
			type: Boolean,
			default: true,
		},
		circulo: {
			type: [{ type: Schema.Types.ObjectId, ref: 'circulo' }],
		},
		lat: {
			type: Number,
			required: true,
		},
		long: {
			type: Number,
			required: true,
		},
		parents: new mongoose.Schema<IParent>({
			fullNameParent: {
				type: String,
				required: true,
			},
			uniqueParent: {
				type: Boolean,
			},
			addressParent: {
				type: String,
			},
			phoneNumberParent: {
				type: String,
				required: true,
			},
			typeParent: {
				type: String,
				enum: [TypeParent.MADRE, TypeParent.PADRE, TypeParent.TUTOR],
				default: 'madre',
			},
			occupation: {
				type: String,
				enum: ['trabajador', 'jubilado', 'asistenciado'],
				required: true,
			},
			convivencia: {
				type: Boolean,
				required: true,
			},
			work: {
				type: String,
				required: true,
			},
			workAddress: {
				type: String,
				required: true,
			},
			workPosition: {
				type: String,
			},
			organismo: {
				type: String,
				required: true,
			},
			workPhoneParent: {
				type: String,
			},
			entryTime: {
				type: Date,
			},
			outTime: {
				type: Date,
			},
			salary: {
				type: Number,
			},
			otherChildren: {
				type: Boolean,
				default: false,
			},
			cantOtherChildren: {
				type: Number,
			},
			ciOtherChildren: {
				type: String,
			},
			pregnant: {
				type: Boolean,
			},
			student: {
				type: Boolean,
			},
			deaf: {
				type: Boolean,
			},
		}),
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

export default mongoose.model<IChildren>('children', ChildrenSchema);
