import { regularExps } from "../../../config";
import { UserRole } from "../../interfaces/user.interface";

export class RegisterUserDto {
  private constructor(
    public readonly nombre: string,
    public readonly email: string,
    public readonly password: string,
    public readonly rol: UserRole
  ) {}

  static create(object: { [key: string]: any }): [string?, RegisterUserDto?] {
    const { nombre, email, password, rol } = object;

    if (!nombre) return ["Missing nombre"];
    if (!email) return ["Missing email"];
    if (!regularExps.email.test(email)) return ["Email is not valid"];
    if (!password) return ["Missing password"];
    if (password.length < 6) return ["Password too short"];
    if (!rol) return ["Missing rol"];
    if (!["ESTUDIANTE", "DOCENTE", "ADMIN"].includes(rol)) return ["Rol is not valid"];

    return [undefined, new RegisterUserDto(nombre, email, password, rol)];
  }
}