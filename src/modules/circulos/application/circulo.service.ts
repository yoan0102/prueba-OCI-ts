import { ICirculo } from '../domain/circulo';
import Circulo from '../infraestructure/datasource/Circulo.model';

export const getCirculoAll = async () => {
	const query = { status: 1 };
	return await Circulo.find(query);
};

export const getCirculoById = async (id: string) => {
	return await Circulo.findById(id);
};

export const createCirculo = async (entity: ICirculo) => {
	return await Circulo.create(entity);
};

export const updateCirculoById = async (id: string, entity: ICirculo) => {
	return await Circulo.findByIdAndUpdate(id, entity, { new: true });
};

export const removeCirculoById = async (id: string) => {
	return await Circulo.findByIdAndUpdate(id, { status: 0 }, { new: true });
};
