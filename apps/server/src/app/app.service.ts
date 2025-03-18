import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: 'Hello API' };
  }

  placeOrder(order: string) {
    console.error('@@Place order', order);
  }
}
