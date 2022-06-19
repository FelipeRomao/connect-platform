import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateRouteService } from '../@core/app/services/create-route';
import { ListAllRoutesService } from '../@core/app/services/list-all-routes';
import { CreateRouteDto } from './dto/create-route.dto';

@Controller('routes')
export class RoutesController {
  constructor(
    private createUseCase: CreateRouteService,
    private listAllUseCase: ListAllRoutesService
  ) {}

  @Post()
  create(@Body() createRouteDto: CreateRouteDto) {
    return this.createUseCase.execute(createRouteDto);
  }

  @Get()
  findAll() {
    return this.listAllUseCase.execute();
  }
}
