import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderCoffeeButtonComponent } from './order-coffee-button.component';

describe('OrderCoffeeButtonComponent', () => {
  let component: OrderCoffeeButtonComponent;
  let fixture: ComponentFixture<OrderCoffeeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderCoffeeButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderCoffeeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
