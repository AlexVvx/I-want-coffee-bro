import { Test, TestingModule } from '@nestjs/testing';
import { OrderController } from './order.controller';
import { AppService } from './app.service';

describe('OrderController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [OrderController],
      providers: [AppService],
    }).compile();
  });

  describe('getData', () => {
    it('should return "Hello API"', () => {
      const appController = app.get<OrderController>(OrderController);
      expect(appController.getData()).toEqual({ message: 'Hello API' });
    });
  });
});
