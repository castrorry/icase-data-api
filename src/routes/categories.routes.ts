import { Router } from "express";
import categoriesController from "../controllers/categories.controller";

const categoryRoutes = Router();

categoryRoutes.post('/', categoriesController.create);
categoryRoutes.get('/', categoriesController.index);
categoryRoutes.get('/:id', categoriesController.show);
categoryRoutes.put('/:id', categoriesController.update);
categoryRoutes.delete('/:id', categoriesController.delete);

export { categoryRoutes }