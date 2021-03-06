import { Entity } from '@/shared/domain/entity';

export type LatLng = { lat: number; lng: number };

export type RouteProps = {
  title: string;
  startPosition: LatLng;
  endPosition: LatLng;
  points?: LatLng[];
};

export type RouteOutput = {
  id: string;
  title: string;
  startPosition: LatLng;
  endPosition: LatLng;
  points?: LatLng[];
};

export class Route extends Entity<RouteProps> {
  public readonly id: string;
  public props: Required<RouteProps>;

  private constructor(props: RouteProps) {
    super(props);

    if (!props) {
      //@ts-expect-error used for ORM
      this.props = {};
      return;
    }

    this.props = {
      ...props,
      points: props.points || [],
    };
  }

  static create(props: RouteProps) {
    return new Route(props);
  }

  updateTitle(title: string) {
    this.title = title;
  }

  updatePosition(startPosition: LatLng, endPosition: LatLng) {
    this.startPosition = startPosition;
    this.endPosition = endPosition;
  }

  updatePoints(points: LatLng[]) {
    this.points = points;
  }

  get title() {
    return this.props.title;
  }

  private set title(value: string) {
    this.props.title = value;
  }

  get startPosition() {
    return this.props.startPosition;
  }

  private set startPosition(value: LatLng) {
    this.props.startPosition = value;
  }

  get endPosition() {
    return this.props.endPosition;
  }

  private set endPosition(value: LatLng) {
    this.props.endPosition = value;
  }

  get points() {
    return this.props.points;
  }

  private set points(value: LatLng[]) {
    this.props.points = value;
  }
}
