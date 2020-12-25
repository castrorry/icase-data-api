import { Router } from "express";
import productsController from "../controllers/products.controller";

const productRoutes = Router();

productRoutes.post('/', productsController.create);
productRoutes.get('/', productsController.index);
productRoutes.get('/:id', productsController.show);
productRoutes.put('/:id', productsController.update);
productRoutes.delete('/:id', productsController.delete);

export { productRoutes }