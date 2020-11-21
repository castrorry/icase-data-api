import { Router } from "express";

const Routes = Router();

Routes.get('/', (request, response) => {
  return response.json({
    message: 'Olá'
  });
});

export { Routes }