import { createAction, props } from '@ngrx/store';
import { CoffeeType } from './order.models';

export const placeOrder = createAction(
  '[Order Page] Place order',
  props<{ coffeeType: CoffeeType }>()
);

export const placeOrderSuccess = createAction(
  '[Order/API] Place order Success'
);

export const placeOrderFailure = createAction(
  '[Order/API] Place order Failure',
  props<{ error: any }>()
);

export const clearOrder = createAction(
  '[Order Page] Clear order'
);
