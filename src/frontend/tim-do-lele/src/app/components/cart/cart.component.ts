import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { CartService } from 'app/service/cart.service';
import { Food } from '../Food.model';

@Component({
  selector: 'app-cart',
  standalone: true,
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Output() cartClosed = new EventEmitter<void>();
  items: Food[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.items = [];
  }
}
