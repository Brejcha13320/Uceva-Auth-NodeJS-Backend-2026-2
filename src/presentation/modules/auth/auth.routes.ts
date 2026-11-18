import { Router } from "express";
import { AuthMiddleware } from "../../middlewares/auth.middleware";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";

export class AuthRoutes {
  static get routes(): Router {
    const router = Router();
    const authService = new AuthService();
    const controller = new AuthController(authService);

    // Definir las rutas
    router.post("/login", controller.loginUser);
    router.post("/register", controller.registerUser);
    router.get("/validate-token", [AuthMiddleware.validateToken], controller.validateToken);

    return router;
  }
}