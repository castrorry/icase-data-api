import { Router } from "express";
import { categoryRoutes } from "./categories.routes";

import { deviceRoutes } from "./devices.routes";
import { productRoutes } from "./products.routes";
import { productTypeRoutes } from "./productTypes.routes";

const Routes = Router();
// Device routes
Routes.use('/devices', deviceRoutes);
// category routes
Routes.use('/categories', categoryRoutes);
// ProductType routes
Routes.use('/productTypes', productTypeRoutes);
// Product routes
Routes.use('/products', productRoutes);

Routes.get('/', (request, response) => {
  return response.json({
    ok: true
  });
});

export { Routes }