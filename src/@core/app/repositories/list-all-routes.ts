import { RouteModel } from '../dtos/route-model';

export interface ListAllRoutesRepository {
  findAll(): Promise<RouteModel[]>;
}
