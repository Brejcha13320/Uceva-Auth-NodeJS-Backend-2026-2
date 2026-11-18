import { Request, Response } from "express";
import { HandleError } from "../../../domain";
import { CreateTaskDto } from "../../../domain/dtos/task/create-task.dto";
import { TaskService } from "./task.service";
import { UpdateTaskDto } from "../../../domain/dtos/task/update-task.dto";

export class TaskController {

    constructor(private taskService: TaskService){}

    getAll = (req: Request, res: Response) => {
        this.taskService
            .getAll()
            .then((tasks) => res.status(200).json(tasks))
            .catch((error) => HandleError.error(error, res));
    }

    getById = (req: Request, res: Response) => {
        const id = req.params.id;
        this.taskService
            .getById(id)
            .then((tasks) => res.status(200).json(tasks))
            .catch((error) => HandleError.error(error, res));
    }
    
    create = (req: Request, res: Response) => {
        const [error, createTaskDto] = CreateTaskDto.create(req.body);
        if(error) return res.status(400).json({ error });
        this.taskService
            .create(createTaskDto!)
            .then((task) => res.status(200).json(task))
            .catch((error) => HandleError.error(error, res));
    }

    update = (req: Request, res: Response) => {
        const id = req.params.id;
        const [error, updateTaskDto] = UpdateTaskDto.create(req.body);
        if(error) return res.status(400).json({ error });
        this.taskService
            .update(id, updateTaskDto!)
            .then((task) => res.status(200).json(task))
            .catch((error) => HandleError.error(error, res));
    }

    delete = (req: Request, res: Response) => {
        const id = req.params.id;
        this.taskService
            .delete(id)
            .then((task) => res.status(200).json(task))
            .catch((error) => HandleError.error(error, res));
    }

}