import { IUser } from "../domain/users";
import User from "../infraestructure/datasource/User.model";

export const getUserAll = async () => {
  const query = { status: 1 };
  return await User.find(query);
};

export const getUserById = async (id:string) => {
  return await User.findById(id);
};


export const createUser = async (entity:IUser) => {
  return await User.create(entity);
};

export const updateUserById = async (id:string, entity:IUser) => {
  return await User.findByIdAndUpdate(id, entity, { new: true });
};

export const removeUserById = async (id: string, razon_remove:string) => {
  return await User.findByIdAndUpdate(id, { status: 0, razon_remove }, { new: true });
};
