import { Router } from "express";
import { AuthMiddleware } from "./middlewares/auth.middleware";
import { AuthRoutes } from "./modules/auth/auth.routes";
import { ProjectRoutes } from "./modules/project/project.routes";
import { TaskRoutes } from "./modules/task/task.routes";

export class AppRoutes {

  static get routes(): Router {
    const router = Router();
    const apiRouter = Router();

    // Definir rutas
    apiRouter.use("/auth", AuthRoutes.routes);

    //Peticiones que necesitan token
    apiRouter.use(AuthMiddleware.validateToken);

    apiRouter.use(
      "/projects", 
      AuthMiddleware.validateRole("DOCENTE", "ADMIN"),
      ProjectRoutes.routes
    );
    
    apiRouter.use(
      "/tasks", 
      AuthMiddleware.validateRole("ESTUDIANTE", "ADMIN"),
      TaskRoutes.routes
    );

    router.use("/api", apiRouter);

    return router;
  }
}