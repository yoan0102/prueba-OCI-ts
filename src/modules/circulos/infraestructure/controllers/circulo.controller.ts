import { Request, Response } from "express"
import { ICirculo } from './../../domain/circulo.d';
import * as CirculoService from '../../application/circulo.service';



export const getCirculoAll = async (req: Request, res: Response) => {
  try {

    const circulos = await CirculoService.getCirculoAll();
    
    
    return res.json({
     circulos
    });
  } catch (error) {
    res.status(500).json({
      msg: 'Error de servidor'
    })
    console.log(error);
    
  }
}

export const getCirculoById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params

    const circulo = await CirculoService.getCirculoById(id);

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
  const circuloBody: ICirculo = req.body;
  try {
    const circulo = await CirculoService.createCirculo(circuloBody);
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
    const entity: ICirculo = req.body;
    
    const circuloUpdated = await CirculoService.updateCirculoById(id, entity);
    res.json(circuloUpdated);
  } catch (error) {
    console.log(error);
  }
};

export const removeCirculoById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const circuloUpdated = await CirculoService.removeCirculoById(id);
    res.json(circuloUpdated);
  } catch (error) {
    console.log(error);
  }
};