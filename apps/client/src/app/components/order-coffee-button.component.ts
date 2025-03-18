import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderFacade } from '../+state/order.facade';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-order-coffee-button',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './order-coffee-button.component.html',
  styleUrl: './order-coffee-button.component.scss',
})
export class OrderCoffeeButtonComponent {
  loading$: Observable<boolean>;
  placed$: Observable<boolean>;
  constructor(private orderFacade: OrderFacade) {
    this.loading$ = this.orderFacade.loading$;
    this.placed$ = this.orderFacade.placed$;
  }

  orderCoffee() {
    this.orderFacade.placeOrder('raf'); //TODO: add different coffee types into template
  }

  clearOrder() {
    this.orderFacade.clearOrder();
  }
}
