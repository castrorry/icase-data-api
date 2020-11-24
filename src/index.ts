import Express from 'express';
import cors from 'cors';

import { Routes } from './routes';
import './database/connection';

const App = Express();
App.use(cors());
App.use(Express.json());
App.use(Routes);

App.listen(process.env.PORT || 3000, () => {
  console.log(
    `Express Application running on port: ${process.env.PORT || 3000}`
  );
});