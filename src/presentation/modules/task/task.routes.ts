import { Router } from "express";
import { TaskService } from "./task.service";
import { TaskController } from "./task.controller";

export class TaskRoutes {
    static get routes(): Router {
        const router = Router();
        const service = new TaskService();
        const controller = new TaskController(service);

        router.get('/', controller.getAll);
        router.get('/:id', controller.getById);
        router.post('/', controller.create);
        router.put('/:id', controller.update);
        router.delete('/:id', controller.delete);

        return router;
    }
}