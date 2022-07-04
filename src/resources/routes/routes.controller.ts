import { RoutesService } from '@/core/app/services/route.crud';
import { CreateRouteDto } from '@/shared/dtos/routes/create';
import { UpdateRouteDto } from '@/shared/dtos/routes/update';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('routes')
export class RoutesController {
  constructor(private readonly routeService: RoutesService) {}

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

  @Put(':id')
  update(@Param('id') id: string, @Body() updateRouteDto: UpdateRouteDto) {
    return this.routeService.update(id, updateRouteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.routeService.remove(id);
  }
}
