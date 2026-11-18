import { Request, Response } from "express";
import { HandleError } from "../../../domain";
import { CreateProjectDto } from "../../../domain/dtos/project/create-project.dto";
import { ProjectService } from "./project.service";
import { UpdateProjectDto } from "../../../domain/dtos/project/update-project.dto";

export class ProjectController {

    constructor(private projectService: ProjectService){}

    getAll = (req: Request, res: Response) => {
        this.projectService
            .getAll()
            .then((projects) => res.status(200).json(projects))
            .catch((error) => HandleError.error(error, res));
    }

    getById = (req: Request, res: Response) => {
        const id = req.params.id;
        this.projectService
            .getById(id)
            .then((projects) => res.status(200).json(projects))
            .catch((error) => HandleError.error(error, res));
    }
    
    create = (req: Request, res: Response) => {
        const [error, createProjectDto] = CreateProjectDto.create(req.body);
        if(error) return res.status(400).json({ error });
        this.projectService
            .create(createProjectDto!)
            .then((project) => res.status(200).json(project))
            .catch((error) => HandleError.error(error, res));
    }

    update = (req: Request, res: Response) => {
        const id = req.params.id;
        const [error, updateProjectDto] = UpdateProjectDto.create(req.body);
        if(error) return res.status(400).json({ error });
        this.projectService
            .update(id, updateProjectDto!)
            .then((project) => res.status(200).json(project))
            .catch((error) => HandleError.error(error, res));
    }

    delete = (req: Request, res: Response) => {
        const id = req.params.id;
        this.projectService
            .delete(id)
            .then((project) => res.status(200).json(project))
            .catch((error) => HandleError.error(error, res));
    }

}