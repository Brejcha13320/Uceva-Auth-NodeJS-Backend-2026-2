import { prisma } from "../../../database";
import { CreateProjectDto } from "../../../domain/dtos/project/create-project.dto";
import { UpdateProjectDto } from "../../../domain/dtos/project/update-project.dto";
import { Project } from "../../../domain/interfaces/project.interface";

export class ProjectService {

    public async getAll(): Promise<Project[]>{
        return await prisma.proyecto.findMany();
    }

    public async getById(id: string): Promise<Project | null>{
        return await prisma.proyecto.findFirst({
            where: { id }
        });
    }

    public async create(data: CreateProjectDto): Promise<Project>{
        return await prisma.proyecto.create({ data });
    }

    public async update(id: string, data: UpdateProjectDto): Promise<Project>{
        return await prisma.proyecto.update({
            where: { id },
            data
        });
    }

    public async delete(id: string): Promise<Project>{
        return await prisma.proyecto.delete({ where: { id } });
    }

}