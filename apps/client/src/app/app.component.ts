import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {OrderCoffeeButtonComponent} from "./components/order-coffee-button.component";

@Component({
  imports: [OrderCoffeeButtonComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'client';
}
