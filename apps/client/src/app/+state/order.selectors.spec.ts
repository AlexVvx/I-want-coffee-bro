import { OrderEntity } from './order.models';
import {
  orderAdapter,
  OrderPartialState,
  initialOrderState,
} from './order.reducer';
import * as OrderSelectors from './order.selectors';

describe('Order Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getOrderId = (it: OrderEntity) => it.id;
  const createOrderEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as OrderEntity);

  let state: OrderPartialState;

  beforeEach(() => {
    state = {
      order: orderAdapter.setAll(
        [
          createOrderEntity('PRODUCT-AAA'),
          createOrderEntity('PRODUCT-BBB'),
          createOrderEntity('PRODUCT-CCC'),
        ],
        {
          ...initialOrderState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Order Selectors', () => {
    it('selectAllOrder() should return the list of Order', () => {
      const results = OrderSelectors.selectAllOrder(state);
      const selId = getOrderId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectEntity() should return the selected Entity', () => {
      const result = OrderSelectors.selectEntity(state) as OrderEntity;
      const selId = getOrderId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectOrderLoaded() should return the current "loaded" status', () => {
      const result = OrderSelectors.selectOrderLoaded(state);

      expect(result).toBe(true);
    });

    it('selectOrderError() should return the current "error" state', () => {
      const result = OrderSelectors.selectOrderError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
