import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { CartService } from 'app/service/cart.service';
import { Food } from '../Food.model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Output() cartClosed = new EventEmitter<void>();
  items: Food[] = [];

  constructor(private cartService: CartService,
              private router: Router
  ) {}

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.items = [];
  }

  finalizarCompra(): void{
    this.router.navigate(['/perfil'])
  }
}
