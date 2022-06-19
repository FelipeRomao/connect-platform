import { LatLng } from '../../../@core/domain/entities/route';

export type CreateRouteOutput = {
  id: string;
  title: string;
  startPosition: LatLng;
  endPosition: LatLng;
  points?: LatLng[];
};
