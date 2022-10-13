import { Request, Response } from 'express';
import * as AuthService from '../../application/auth.service';

export const login = async (req: Request, res: Response) => {
  try {
    const { nickname, password } = req.body;
    
    const resp = await AuthService.login(nickname, password);
    console.log(resp);
    
    // return res.json({
    //   ...resp,
    // });
  } catch (error) {
    res.status(500).json({
      msg: 'Hable con el administrador',
    });
  }
};
