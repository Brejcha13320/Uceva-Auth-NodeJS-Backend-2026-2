export interface User {
    id: string;
    nombre: string;
    password: string;
    email: string;
    rol: UserRole;
    createdAt: Date;
    updatedAt: Date;
}

export type UserRole = 'ESTUDIANTE' | 'DOCENTE' | 'ADMIN';

export type RegisterUser = Omit<User, "id" | "createdAt" | "updatedAt">;

export type RegisterUserRequest = Omit<User, "password">;

export interface LoginUserRequest {
  user: Omit<User, "password">;
  token: string;
}