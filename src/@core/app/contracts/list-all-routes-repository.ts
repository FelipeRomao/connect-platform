import { RouteModel } from '../models/route-model';

export interface ListAllRoutesRepository {
  findAll(): Promise<RouteModel[]>;
}
