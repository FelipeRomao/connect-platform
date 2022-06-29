import { RouteInMemoryRepository } from '../../infra/providers/db/in-memory/route-in-memory.repository';
import { CreateRouteService } from './create-route';

describe('CreateRouteUseCase Tests', () => {
  it('should create a new route', async () => {
    const repository = new RouteInMemoryRepository();
    const createUseCase = new CreateRouteService(repository);
    const output = await createUseCase.execute({
      title: 'my title',
      startPosition: { lat: 1, lng: 2 },
      endPosition: { lat: 3, lng: 4 },
    });
    expect(repository.items).toHaveLength(1);
    expect(output).toStrictEqual({
      id: repository.items[0].id,
      title: 'my title',
      startPosition: { lat: 1, lng: 2 },
      endPosition: { lat: 3, lng: 4 },
      points: [],
    });
  });
});
