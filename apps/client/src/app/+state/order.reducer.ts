import { createReducer, on, Action } from '@ngrx/store';

import * as OrderActions from './order.actions';
import { Order } from './order.models';

export const ORDER_FEATURE_KEY = 'order';

export interface OrderState {
  order?: Order;
  loading: boolean;
  placed: boolean; // has the Order list been placed
  error?: string | null; // last known error (if any)
}

export interface OrderPartialState {
  readonly [ORDER_FEATURE_KEY]: OrderState;
}

export const initialOrderState: OrderState = {
  // set initial required properties
  placed: false,
  loading: false,
};

const reducer = createReducer(
  initialOrderState,
  on(OrderActions.placeOrder, (state) => ({
    ...state,
    placed: false,
    loading: true,
    error: null,
  })),
  on(OrderActions.placeOrderSuccess, (state) => ({
    ...state,
    placed: true,
    loading: false,
  })),
  on(OrderActions.placeOrderFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
  on(OrderActions.clearOrder, (state) => ({
    placed: false,
    loading: false,
  }))
);

export function orderReducer(state: OrderState | undefined, action: Action) {
  return reducer(state, action);
}
