import { RouteService } from '@/core/app/services/route.crud';
import { CreateRouteDto } from '@/shared/dtos/routes/create.dto';
import { UpdateRouteDto } from '@/shared/dtos/routes/update.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('routes')
export class RoutesController {
  constructor(private readonly routeService: RouteService) {}

  @Post()
  async create(@Body() createRouteDto: CreateRouteDto) {
    return await this.routeService.create(createRouteDto);
  }

  @Get()
  async findAll() {
    return await this.routeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.routeService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRouteDto: UpdateRouteDto) {
    return this.routeService.update(id, updateRouteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.routeService.remove(id);
  }
}
