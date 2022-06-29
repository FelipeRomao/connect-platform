import { RouteModel } from '../dtos/route-model';

export interface CreateRouteRepository {
  insert(route: RouteModel): Promise<void>;
}
