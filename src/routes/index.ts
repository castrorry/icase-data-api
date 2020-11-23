import { Router } from "express";

import { deviceRoutes } from "./devices.routes";

const Routes = Router();
// Device routes
Routes.use('/devices', deviceRoutes);

Routes.get('/', (request, response) => {
  return response.json({
    ok: true
  });
});

export { Routes }