import { IChildren } from '../domain/children';
import Children from '../infraestructure/datasource/Children.model';

export const getChildrenAll = async () => {
	const query = { status: 1 };
	return await Children.find(query);
};

export const getChildrenById = async (id: string) => {
	return await Children.findById(id);
};

export const createChildren = async (entity: IChildren) => {
	return await Children.create(entity);
};

export const updateChildrenById = async (id: string, entity: IChildren) => {
	return await Children.findByIdAndUpdate(id, entity, { new: true });
};

export const removeChildrenById = async (id: string) => {
	return await Children.findByIdAndUpdate(id, { status: 0 }, { new: true });
};
