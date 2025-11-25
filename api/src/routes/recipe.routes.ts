import { Router } from "express";
import RecipeController from "../controllers/recipe.controller";

class RecipeRoutes {
  router = Router();
  controller = new RecipeController();

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.get("/", this.controller.findAll);
    this.router.get("/:id", this.controller.findOne);

    // Create a new Tutorial
    //this.router.post("/", this.controller.create);

    // Update a Tutorial with id
    //this.router.put("/:id", this.controller.update);

    // Delete a Tutorial with id
    //this.router.delete("/:id", this.controller.delete);
  }
}

export default new RecipeRoutes().router;