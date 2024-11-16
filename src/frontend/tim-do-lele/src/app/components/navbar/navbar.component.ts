import { Component, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @ViewChild('searchForm') searchForm!: ElementRef;
  @ViewChild('cart') cart!: ElementRef;
  @Output() cartClicked = new EventEmitter<void>(); // Evento para o carrinho

  quantity: number = 1; // A quantidade começa em 1

  toggleSearchForm() {
    this.searchForm.nativeElement.classList.toggle('active');
  }

  toggleCart() {
    this.cart.nativeElement.classList.toggle('active');
  }

  onCartClick() {
    this.cartClicked.emit();  // Emite evento para abrir o carrinho
  }

  toggleMenu() {
    const nav = document.querySelector('.nav');
    nav?.classList.toggle('active');
  }

  // Método para diminuir a quantidade
  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--; // Só diminui se a quantidade for maior que 1
    }
  }

  // Método para aumentar a quantidade
  increaseQuantity() {
    this.quantity++; // Aumenta a quantidade
  }
}
