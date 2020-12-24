import { Router } from "express";
import devicesController from "../controllers/devices.controller";

const deviceRoutes = Router();

deviceRoutes.post('/', devicesController.create);
deviceRoutes.get('/', devicesController.index);
deviceRoutes.get('/:id', devicesController.show);
deviceRoutes.put('/:id', devicesController.update);
deviceRoutes.delete('/:id', devicesController.delete);

export { deviceRoutes }