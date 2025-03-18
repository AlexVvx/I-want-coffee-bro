import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideStore, provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import * as fromOrder from './+state/order.reducer';
import { OrderEffects } from './+state/order.effects';
import { OrderFacade } from './+state/order.facade';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideEffects(OrderEffects),
    provideState(fromOrder.ORDER_FEATURE_KEY, fromOrder.orderReducer),
    OrderFacade,
    provideStore(),
    provideEffects(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideHttpClient(),
  ],
};
