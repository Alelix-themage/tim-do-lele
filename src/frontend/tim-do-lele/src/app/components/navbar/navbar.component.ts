import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from 'app/service/cart.service';
import { Food } from 'app/components/Food.model';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @ViewChild('searchForm') searchForm!: ElementRef;
  @ViewChild('cart') cart!: ElementRef;

  cartItems: Food[] = [];
  totalItems: number = 0;

  constructor(public cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cart$.subscribe((items) => {
      this.cartItems = items;
      this.updateTotalItems();
    });
  }

  toggleSearchForm() {
    this.searchForm.nativeElement.classList.toggle('active');
  }

  toggleCart() {
    this.cart.nativeElement.classList.toggle('active');
  }

  toggleMenu() {
    const nav = document.querySelector('.nav');
    nav?.classList.toggle('active');
  }

  get total(): number {
    return this.cartItems.reduce(
      (total, item) => total + item.PRECO * (item.QUANTITY || 1),
      0
    );
  }

  private updateTotalItems(): void {
    this.totalItems = this.cartItems.reduce(
      (sum, item) => sum + (item.QUANTITY || 1),
      0
    );
  }
}
