export interface IUser {
  nick_name: string;
  first_name: string;
  last_name: string;
  password: string;
  position: string;
  role?: string;
  status?: boolean;
  razon_remove: string;
}

enum Role{
  ADMIN_ROLE = 'ADMIN_ROLE',
  USER_ROLE = 'USER_ROLE'
}