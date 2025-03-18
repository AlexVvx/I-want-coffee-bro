import { Action } from '@ngrx/store';

import * as OrderActions from './order.actions';
import { OrderEntity } from './order.models';
import { OrderState, initialOrderState, orderReducer } from './order.reducer';

describe('Order Reducer', () => {
  const createOrderEntity = (id: string, name = ''): OrderEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Order actions', () => {
    it('loadOrderSuccess should return the list of known Order', () => {
      const order = [
        createOrderEntity('PRODUCT-AAA'),
        createOrderEntity('PRODUCT-zzz'),
      ];
      const action = OrderActions.loadOrderSuccess({ order });

      const result: OrderState = orderReducer(initialOrderState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = orderReducer(initialOrderState, action);

      expect(result).toBe(initialOrderState);
    });
  });
});
