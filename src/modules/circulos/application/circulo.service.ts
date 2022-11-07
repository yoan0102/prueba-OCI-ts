import { ICirculo } from '../domain/circulo';
import Circulo from '../infraestructure/datasource/Circulo.model';
import { radianesConvert } from '../../../shared/utils/radianesConvert';

export const getCirculoAll = async () => {
	const query = { status: 1 };
	return await Circulo.find(query);
};

export const getCirculoById = async (id: string) => {
	return await Circulo.findById(id);
};

export const createCirculo = async (entity: ICirculo) => {
	const { lat, long, ...rest } = entity;
	const { latRadianes, longRadianes } = radianesConvert(lat, long);
	return await Circulo.create({
		...rest,
		lat: latRadianes,
		long: longRadianes,
	});
};

export const updateCirculoById = async (id: string, entity: ICirculo) => {
	return await Circulo.findByIdAndUpdate(id, entity, { new: true });
};

export const removeCirculoById = async (id: string) => {
	return await Circulo.findByIdAndUpdate(id, { status: 0 }, { new: true });
};
