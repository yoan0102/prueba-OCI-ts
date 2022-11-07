import Submision from '../../infraestructure/datasource/Submision.model';

export const issetSubmisionId = async (id: string) => {
	const submision = await Submision.findById({ _id: id });

	if (!submision) {
		throw new Error('La planilla no existe');
	}
};
