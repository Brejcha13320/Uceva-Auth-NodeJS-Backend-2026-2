import { StateTask } from "../../interfaces/task.interface";

export class UpdateTaskDto {
  private constructor(
    public readonly titulo: string,
    public readonly descripcion: string,
    public readonly prioridad: string,
    public readonly estado: StateTask,
  ) {}

  static create(object: { [key: string]: any }): [string?, UpdateTaskDto?] {
    const { titulo, descripcion, prioridad, estado } = object;

    if (!titulo) return ["Missing titulo"];
    if (!descripcion) return ["Missing descripcion"];
    if (!prioridad) return ["Missing prioridad"];
    if (!estado) return ["Missing estado"];
    if (["COMPLETADA", "PROCESO", "PENDIENTE"].includes(estado)) ["Missing is not valid"];

    return [undefined, new UpdateTaskDto(titulo, descripcion, prioridad, estado)];
  }
}