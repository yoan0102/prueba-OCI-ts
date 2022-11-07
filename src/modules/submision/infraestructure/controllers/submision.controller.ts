import { Request, Response } from 'express';
import { ISubmision } from '../../domain/submision';
import * as SubmisionService from '../../application/submision.service';

export const getSubmisionAll = async (req: Request, res: Response) => {
	try {
		const submisions = await SubmisionService.getSubmisionAll();

		return res.json({
			submisions,
		});
	} catch (error) {
		res.status(500).json({
			msg: 'Error de servidor',
		});
		console.log(error);
	}
};

export const getSubmisionById = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;

		const submision = await SubmisionService.getSubmisionById(id);

		return res.json({
			submision,
		});
	} catch (error) {
		res.status(500).json({
			msg: 'Error de servidor',
		});
		console.log(error);
	}
};

export const createSubmision = async (req: Request, res: Response) => {
	const submisionBody: ISubmision = req.body;
	try {
		const submision = await SubmisionService.createSubmision(submisionBody);
		res.status(201).json(submision);
	} catch (error) {
		console.log(error);
		res.status(500).json({
			msg: 'Error de servidor',
		});
	}
};

export const updateSubmisionById = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		const entity: ISubmision = req.body;

		const submisionUpdated = await SubmisionService.updateSubmisionById(id, entity);
		res.json(submisionUpdated);
	} catch (error) {
		console.log(error);
		res.status(500).json({
			msg: 'Error de servidor',
		});
	}
};

export const removeSubmisionById = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;

		const submisionUpdated = await SubmisionService.removeSubmisionById(id);
		res.json(submisionUpdated);
	} catch (error) {
		console.log(error);
		res.status(500).json({
			msg: 'Error de servidor',
		});
	}
};
