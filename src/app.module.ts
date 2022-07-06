import { RoutesModule } from '@/resources/routes/routes.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RouteSchema } from './core/infra/typeorm/schemas/route';
import { UserSchema } from './core/infra/typeorm/schemas/user';
import { UsersModule } from './resources/users/users.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: join(__dirname, 'database.sqlite'),
      synchronize: true,
      logging: true,
      entities: [RouteSchema, UserSchema],
    }),
    RoutesModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
