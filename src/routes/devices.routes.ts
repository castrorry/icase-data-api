import { Router } from "express";
import devicesController from "../controllers/devices.controller";

const deviceRoutes = Router();

deviceRoutes.post('/', devicesController.create);
deviceRoutes.get('/', devicesController.index);
deviceRoutes.get('/:id', devicesController.show);

export { deviceRoutes }