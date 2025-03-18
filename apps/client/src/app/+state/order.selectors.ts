import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ORDER_FEATURE_KEY, OrderState } from './order.reducer';

// Lookup the 'Order' feature state managed by NgRx
export const selectOrderState =
  createFeatureSelector<OrderState>(ORDER_FEATURE_KEY);

export const selectOrderPlaced = createSelector(
  selectOrderState,
  (state: OrderState) => state.placed
);

export const selectOrderLoading = createSelector(
  selectOrderState,
  (state: OrderState) => state.loading
);

export const selectOrderError = createSelector(
  selectOrderState,
  (state: OrderState) => state.error
);

export const selectOrder = createSelector(
  selectOrderState,
  (state: OrderState) => state.order
);
