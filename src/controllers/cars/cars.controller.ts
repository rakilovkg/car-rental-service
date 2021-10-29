import { Controller, Body, Get, Post } from '@nestjs/common';
import { CarRentalDto } from './dto/CarRentalDto';
import { Car } from './Car';

@Controller('cars')
export class CarsController {
  @Get()
  async findAll(): Promise<Car[]> {
    return [{
        title: 'FORD',
        price: 250.5
    }, {
      title: 'BMW',
      price: 325.75
    }];
  }

  @Post()
  async rent(@Body() carRentalDto: CarRentalDto) {
    
  }
}
