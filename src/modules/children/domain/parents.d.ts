export interface IParent {
	fullNameParent: string;
	uniqueParent: boolean;
	addressParent: string;
	phoneNumberParent: string;
	typeParent?: TypeParent.MADRE | TypeParent.PADRE | TypeParent.TUTOR;
	occupation: Ocupation.TRABAJADOR | Ocupation.JUBILADO | Ocupation.ASISTENCIADO;
	convivencia: boolean;
	work: string;
	workAddress: string;
	workPosition: string;
	organismo: string;
	workPhoneParent: string;
	entryTime: Date;
	outTime: Date;
	salary: number;
	otherChildren: boolean;
	cantOtherChildren: number;
	ciOtherChildren: string;
	pregnant: boolean;
	student: boolean;
	deaf: boolean;
}

export enum TypeParent {
	MADRE = 'madre',
	PADRE = 'padre',
	TUTOR = 'tutor',
}

export enum Ocupation {
	TRABAJADOR = 'trabajador',
	JUBILADO = 'jubilado',
	ASISTENCIADO = 'asistenciado',
}
