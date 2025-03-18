import { Controller, Get, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('orders')
export class OrderController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getOrders() {
    return this.appService.getData();
  }

  @Post()
  createNewOrder(@Req() request: Request) {
    const order = (request.body as any).order;
    this.appService.placeOrder(order);
    return {};
  }
}
