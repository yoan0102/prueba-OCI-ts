import { ISubmision } from '../domain/submision';
import Submision from '../infraestructure/datasource/Submision.model';

export const getSubmisionAll = async () => {
	const query = { status: 1 };
	return await Submision.find(query);
};

export const getSubmisionById = async (id: string) => {
	return await Submision.findById(id);
};

export const createSubmision = async (entity: ISubmision) => {
	return await Submision.create(entity);
};

export const updateSubmisionById = async (id: string, entity: ISubmision) => {
	return await Submision.findByIdAndUpdate(id, entity, { new: true });
};

export const removeSubmisionById = async (id: string) => {
	return await Submision.findByIdAndUpdate(id, { status: 0 }, { new: true });
};
