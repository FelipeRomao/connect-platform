import { Body, Controller, Get, Post } from '@nestjs/common';
import { RouteService } from 'src/@core/app/services/route.crud';
import { Route } from 'src/@core/domain/entities/route';

@Controller('routes')
export class RoutesController {
  constructor(private readonly routeService: RouteService) {}

  @Post()
  async create(@Body() createRouteDto: Route) {
    return await this.routeService.create(createRouteDto);
  }

  @Get()
  async findAll() {
    return await this.routeService.findAll();
  }
}
