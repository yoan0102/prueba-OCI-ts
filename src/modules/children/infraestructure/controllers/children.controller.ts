import { Request, Response } from 'express';
import { IChildren } from './../../domain/children.d';
import * as ChildrenService from '../../application/children.service';

export const getChildrenAll = async (req: Request, res: Response) => {
	try {
		const childrens = await ChildrenService.getChildrenAll();

		return res.json({
			childrens,
		});
	} catch (error) {
		res.status(500).json({
			msg: 'Error de servidor',
		});
		console.log(error);
	}
};

export const getChildrenById = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;

		const children = await ChildrenService.getChildrenById(id);

		return res.json({
			children,
		});
	} catch (error) {
		res.status(500).json({
			msg: 'Error de servidor',
		});
		console.log(error);
	}
};

export const createChildren = async (req: Request, res: Response) => {
	const ChildrenBody: IChildren = req.body;
	try {
		const children = await ChildrenService.createChildren(ChildrenBody);
		res.status(201).json(children);
	} catch (error) {
		console.log(error);
		res.status(500).json({
			msg: 'Error de servidor',
		});
	}
};

export const updateChildrenById = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		const entity: IChildren = req.body;

		const childrenUpdated = await ChildrenService.updateChildrenById(id, entity);
		res.json(childrenUpdated);
	} catch (error) {
		console.log(error);
		res.status(500).json({
			msg: 'Error de servidor',
		});
	}
};

export const removeChildrenById = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;

		const childrenUpdated = await ChildrenService.removeChildrenById(id);
		res.json(childrenUpdated);
	} catch (error) {
		console.log(error);
		res.status(500).json({
			msg: 'Error de servidor',
		});
	}
};
