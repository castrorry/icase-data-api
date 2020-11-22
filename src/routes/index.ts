import { Router } from "express";

import { deviceRoutes } from "./devices.routes";

const Routes = Router();
// Device routes
Routes.use(deviceRoutes);

Routes.get('/', (request, response) => {
  return response.json({
    message: 'Olá'
  });
});

export { Routes }