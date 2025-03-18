import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { readFirst } from '@nx/angular/testing';

import * as OrderActions from './order.actions';
import { OrderEffects } from './order.effects';
import { OrderFacade } from './order.facade';
import { OrderEntity } from './order.models';
import {
  ORDER_FEATURE_KEY,
  OrderState,
  initialOrderState,
  orderReducer,
} from './order.reducer';
import * as OrderSelectors from './order.selectors';

interface TestSchema {
  order: OrderState;
}

describe('OrderFacade', () => {
  let facade: OrderFacade;
  let store: Store<TestSchema>;
  const createOrderEntity = (id: string, name = ''): OrderEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(ORDER_FEATURE_KEY, orderReducer),
          EffectsModule.forFeature([OrderEffects]),
        ],
        providers: [OrderFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(OrderFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allOrder$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allOrder$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadOrderSuccess` to manually update list
     */
    it('allOrder$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allOrder$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        OrderActions.loadOrderSuccess({
          order: [createOrderEntity('AAA'), createOrderEntity('BBB')],
        })
      );

      list = await readFirst(facade.allOrder$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
