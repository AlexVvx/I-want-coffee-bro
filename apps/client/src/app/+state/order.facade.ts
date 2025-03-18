import { Injectable, inject } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';

import * as OrderActions from './order.actions';
import * as OrderFeature from './order.reducer';
import * as OrderSelectors from './order.selectors';
import { CoffeeType } from './order.models';
import { placeOrder } from './order.actions';

@Injectable()
export class OrderFacade {
  private readonly store = inject(Store);

  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  placed$ = this.store.pipe(select(OrderSelectors.selectOrderPlaced));
  loading$ = this.store.pipe(select(OrderSelectors.selectOrderLoading));
  order$ = this.store.pipe(select(OrderSelectors.selectOrder));

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  placeOrder(coffeeType: CoffeeType) {
    this.store.dispatch(OrderActions.placeOrder({ coffeeType }));
  }

  clearOrder() {
    this.store.dispatch(OrderActions.clearOrder());
  }
}
