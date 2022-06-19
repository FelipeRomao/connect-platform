import { RouteModel } from '../models/route-model';

export interface CreateRouteRepository {
  insert(route: RouteModel): Promise<void>;
}
