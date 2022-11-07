type ISubmision = {
	noEntry: number;
	type?: TypeSubmision.NEW | TypeSubmision.TRASLADO;
	social_case: boolean;
	motive: string;
	status: boolean;
	children: Object;
};

export enum TypeSubmision {
	NEW = 'nueva',
	TRASLADO = 'traslado',
}
