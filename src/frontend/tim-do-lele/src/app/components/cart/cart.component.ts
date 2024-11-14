import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  @Output() cartClosed = new EventEmitter<void>();  // Emite evento para fechar o carrinho
}
