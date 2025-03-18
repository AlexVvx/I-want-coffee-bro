import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CoffeeType } from '../+state/order.models';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private httpClient: HttpClient) {}

  createNewOrder(order: CoffeeType) {
    return this.httpClient.post('http://localhost:3000/api/orders', { order });
  }
}
