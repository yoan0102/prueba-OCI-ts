import { Request, Response } from 'express';
import { IChildren } from './../../domain/children.d';
import * as ChildrenService from '../../application/children.service';

export const getChildrenAll = async (req: Request, res: Response) => {
	try {
		const circulos = await ChildrenService.getChildrenAll();

		return res.json({
			circulos,
		});
	} catch (error) {
		res.status(500).json({
			msg: 'Error de servidor',
		});
		console.log(error);
	}
};

export const getCHildrenById = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;

		const circulo = await ChildrenService.getCirculoById(id);

		return res.json({
			circulo,
		});
	} catch (error) {
		res.status(500).json({
			msg: 'Error de servidor',
		});
		console.log(error);
	}
};

export const createCirculo = async (req: Request, res: Response) => {
	const circuloBody: IChildren = req.body;
	try {
		const circulo = await ChildrenService.createCirculo(circuloBody);
		res.status(201).json(circulo);
	} catch (error) {
		console.log(error);
		res.status(500).json({
			msg: 'Error de servidor',
		});
	}
};

export const updateCirculoById = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		const entity: IChildren = req.body;

		const circuloUpdated = await ChildrenService.updateCirculoById(id, entity);
		res.json(circuloUpdated);
	} catch (error) {
		console.log(error);
		res.status(500).json({
			msg: 'Error de servidor',
		});
	}
};

export const removeCirculoById = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;

		const circuloUpdated = await ChildrenService.removeCirculoById(id);
		res.json(circuloUpdated);
	} catch (error) {
		console.log(error);
		res.status(500).json({
			msg: 'Error de servidor',
		});
	}
};
