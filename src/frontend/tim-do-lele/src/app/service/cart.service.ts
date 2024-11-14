import { Injectable } from '@angular/core';
import { Food } from 'app/components/Food.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: Food[] = [];

  // Adiciona um lanche ao carrinho
  addToCart(item: Food): void {
    this.items.push(item);
  }

  // Retorna os itens do carrinho
  getItems(): Food[] {
    return this.items;
  }

  // Limpa o carrinho
  clearCart(): void {
    this.items = [];
  }
}
