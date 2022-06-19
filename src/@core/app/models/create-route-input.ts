import { LatLng } from '../../../@core/domain/entities/route';

export type CreateRouteInput = {
  title: string;
  startPosition: LatLng;
  endPosition: LatLng;
  points?: LatLng[];
};
