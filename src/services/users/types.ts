export enum UserRole {
  Admin = 'admin',
  Operator = 'operator',
};

export interface User {
  id: number;
  username: string;
  email: string;
  passwordHash: string;
  role: UserRole;
  createdAt: Date;
};

export interface UserLogin {
  email: string;
  password: string;
};

export interface UserRegister
  extends Omit<User, 'id' | 'createdAt'> { };

export interface UserUpdate
  extends Partial<UserRegister> { };