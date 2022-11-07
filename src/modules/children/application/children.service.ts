import { IChildren } from '../domain/children';
import Children from '../infraestructure/datasource/Children.model';
import { radianesConvert } from '../../../shared/utils/radianesConvert';

export const getChildrenAll = async () => {
	const query = { status: 1 };
	return await Children.find(query).populate({ path: 'circulo', select: 'name' });
};

export const getChildrenById = async (id: string) => {
	return await Children.findById(id).populate({ path: 'circulo', select: 'name' });
};

export const createChildren = async (entity: IChildren) => {
	const { lat, long, ...rest } = entity;
	const { latRadianes, longRadianes } = radianesConvert(lat, long);
	return await Children.create({
		...rest,
		lat: latRadianes,
		long: longRadianes,
	});
};

export const updateChildrenById = async (id: string, entity: IChildren) => {
	return await Children.findByIdAndUpdate(id, entity, { new: true }).populate({ path: 'circulo', select: 'name' });
};

export const removeChildrenById = async (id: string) => {
	return await Children.findByIdAndUpdate(id, { status: 0 }, { new: true });
};
