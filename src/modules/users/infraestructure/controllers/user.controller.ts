import { Request, Response } from "express"
import { IUser } from "modules/users/domain/users";
import * as UserService from '../../application/user.service';



export const getUserAll = async (req: Request, res: Response) => {
  try {

    const users = await UserService.getUserAll();
    
    
    return res.json({
     users
    });
  } catch (error) {
    res.status(500).json({
      msg: 'Error de servidor'
    })
    console.log(error);
    
  }
}

export const getUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params

    const users = await UserService.getUserById(id);

    return res.json({
      users,
    });
  } catch (error) {
    res.status(500).json({
      msg: 'Error de servidor',
    });
    console.log(error);
  }
};

export const createUser = async (req: Request, res: Response) => {
  const userBody: IUser = req.body;
  try {
    const user = await UserService.createUser(userBody);
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: 'Error de servidor',
    });
  }
};

export const updateUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const entity: IUser = req.body;
    
    const userUpdated = await UserService.updateUserById(id, entity);
    res.json(userUpdated);
  } catch (error) {
    console.log(error);
  }
};

export const removeUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const {razon_remove} = req.body;

    const userUpdated = await UserService.removeUserById(id, razon_remove);
    res.json(userUpdated);
  } catch (error) {
    console.log(error);
  }
};