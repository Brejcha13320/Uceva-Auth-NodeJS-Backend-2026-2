
export class UpdateProjectDto {
  private constructor(
    public readonly titulo: string,
    public readonly descripcion: string,
    public readonly asignatura: string,
    public readonly url: string,
    public readonly publicado: boolean,
  ) {}

  static create(object: { [key: string]: any }): [string?, UpdateProjectDto?] {
    const { titulo, descripcion, asignatura, url, publicado } = object;

    if (!titulo) return ["Missing titulo"];
    if (!descripcion) return ["Missing descripcion"];
    if (!asignatura) return ["Missing asignatura"];
    if (!url) return ["Missing url"];
    if (publicado === null || publicado === undefined) return ["Missing publicado"];
    if (typeof publicado !== "boolean") return ["Invalid publicado"];

    return [undefined, new UpdateProjectDto(titulo, descripcion, asignatura, url, publicado)];
  }
}