export interface IUser {
  nick_name: string;
  first_name: string;
  last_name: string;
  password: string;
  position: string;
  role?: 'ADMIN_ROLE'|'USER_ROLE';
  status?: boolean;
  razon_remove: string;
  comparePasswords: (password:string) => boolean
}

