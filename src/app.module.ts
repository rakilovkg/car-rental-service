import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarsController } from './controllers/cars/cars.controller';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [AppController, CarsController],
  providers: [AppService],
})
export class AppModule {}
