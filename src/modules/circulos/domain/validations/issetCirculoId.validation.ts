import Circulo from '../../infraestructure/datasource/Circulo.model';

export const issetCirculoID = async (value: string) => {
	const circulo = await Circulo.findOne({ nick_name: value });

	if (!circulo) {
		throw new Error('User no existe');
	}
};
