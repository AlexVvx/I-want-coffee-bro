import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of, delay } from 'rxjs';
import * as OrderActions from './order.actions';
import * as OrderFeature from './order.reducer';
import { OrderService } from '../services/order.service';

@Injectable()
export class OrderEffects {
  private actions$ = inject(Actions);

  constructor(private orderService: OrderService) {}

  place$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OrderActions.placeOrder),
      switchMap(({ coffeeType }) =>
        this.orderService.createNewOrder(coffeeType)
      ),
      switchMap(() =>
        of(OrderActions.placeOrderSuccess()).pipe(delay(1000))
      ),
      catchError((error) => {
        console.error('Error', error);
        return of(OrderActions.placeOrderFailure({ error }));
      })
    )
  );
}
