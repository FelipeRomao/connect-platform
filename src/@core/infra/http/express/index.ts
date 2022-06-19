import express, { Express, Request, Response } from 'express';
import { CreateRouteService } from '../../../app/services/create-route';
import { ListAllRoutesService } from '../../../app/services/list-all-routes';
import { RouteInMemoryRepository } from '../../db/in-memory/route-in-memory.repository';

const app: Express = express();
app.use(express.json());
const port = process.env.PORT || 3000;

const routeRepo = new RouteInMemoryRepository();

app.get('/routes', async (_req: Request, res: Response) => {
  const listAllUseCase = new ListAllRoutesService(routeRepo);
  const output = await listAllUseCase.execute();
  res.json(output);
});

app.post('/routes', async (req: Request, res: Response) => {
  const createUseCase = new CreateRouteService(routeRepo);
  const output = await createUseCase.execute(req.body);
  res.status(201).json(output);
});

app.listen(port, () => {
  console.log(`Server rodando na porta ${port}`);
});
