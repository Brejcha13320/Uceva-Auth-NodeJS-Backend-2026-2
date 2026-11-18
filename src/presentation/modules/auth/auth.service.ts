import { bcryptAdapter, JwtAdapter } from "../../../config";
import { prisma } from "../../../database";
import { CustomError } from "../../../domain";
import { LoginUserDto } from "../../../domain/dtos/auth/login.dto";
import { RegisterUserDto } from "../../../domain/dtos/auth/register-user.dto";
import { LoginUserRequest, RegisterUser, RegisterUserRequest, User } from "../../../domain/interfaces/user.interface";

export class AuthService {

    public async registerUser(registerUserDto: RegisterUserDto): Promise<RegisterUserRequest> {
        const existUser = await prisma.usuario.findUnique({
            where: { email: registerUserDto.email },
        });

        if (existUser) throw CustomError.badRequest("Email already exist");

        //Encriptar Password
        const passwordEncripted = bcryptAdapter.hash(registerUserDto.password);
        const user: RegisterUser = {
            ...registerUserDto,
            password: passwordEncripted,
        };

        //Crear Usuario
        const userCreate = await prisma.usuario.create({ data: user });

        //Enviar Email
        //await this.sendRegisterEmail(user.email, user.nombre);

        //Crear Entidad
        const { password, ...userEntity } = userCreate as User;

        return { ...userEntity };
    }

    public async loginUser(loginUserDto: LoginUserDto): Promise<LoginUserRequest> {
        const user = await prisma.usuario.findUnique({
            where: { email: loginUserDto.email },
        });

        if (!user) throw CustomError.badRequest("Invalid credentials");

        const isMatching = bcryptAdapter.compare(
            loginUserDto.password,
            user.password
        );

        if (!isMatching) throw CustomError.badRequest("Invalid credentials");

        const { password, ...userEntity } = user as User;

        const token = (await JwtAdapter.generateToken(
            { id: user.id },
            "6h"
        )) as string;

        if (!token) throw CustomError.badRequest("Error while creating JWT");

        return { user: userEntity, token };
    }

}