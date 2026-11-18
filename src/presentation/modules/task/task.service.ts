import { prisma } from "../../../database";
import { CreateTaskDto } from "../../../domain/dtos/task/create-task.dto";
import { UpdateTaskDto } from "../../../domain/dtos/task/update-task.dto";
import { Task } from "../../../domain/interfaces/task.interface";

export class TaskService {

    public async getAll(): Promise<Task[]>{
        return await prisma.tarea.findMany();
    }

    public async getById(id: string): Promise<Task | null>{
        return await prisma.tarea.findFirst({
            where: { id }
        });
    }

    public async create(data: CreateTaskDto): Promise<Task>{
        return await prisma.tarea.create({ data });
    }

    public async update(id: string, data: UpdateTaskDto): Promise<Task>{
        return await prisma.tarea.update({
            where: { id },
            data
        });
    }

    public async delete(id: string): Promise<Task>{
        return await prisma.tarea.delete({ where: { id } });
    }

}