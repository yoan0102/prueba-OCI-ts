import { IParent } from './parents';
export interface IChildren {
	nameChildren: string;
	lastNameChildren: string;
	lastNameChildren2: string;
	noIdentity: number;
	age: number;
	year_of_life: number;
	sex: SexChildren.FEMENINO | SexChildren.MASCULINO;
	street: string;
	between: string;
	house: string;
	stair: string;
	locality: string;
	cPopular: string;
	municipality: string;
	province: string;
	status: boolean;
	circulo: Object;
	lat: number;
	long: number;
	parents: Object;
}

export const enum SexChildren {
	MASCULINO = 'masculino',
	FEMENINO = 'masculino',
}
