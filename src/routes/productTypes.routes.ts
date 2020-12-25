import { Router } from "express";
import productTypesController from "../controllers/productTypes.controller";

const productTypeRoutes = Router();

productTypeRoutes.post('/', productTypesController.create);
productTypeRoutes.get('/', productTypesController.index);
productTypeRoutes.get('/:id', productTypesController.show);
productTypeRoutes.put('/:id', productTypesController.update);
productTypeRoutes.delete('/:id', productTypesController.delete);

export { productTypeRoutes }