import { Router } from "express";

const deviceRoutes = Router();

deviceRoutes.get('/', (request, response) =>
  response.json({ message: 'This is devices route.' })
);

export { deviceRoutes }