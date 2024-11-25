import { Component, OnInit } from '@angular/core';
import { CartService } from 'app/service/cart.service';
import { Food } from 'app/components/Food.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-drinks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-drinks.component.html',
  styleUrls: ['./card-drinks.component.scss'],
})
export class CardDrinksComponent implements OnInit {
  bebidas: Food[] = [
    { ID: 1, NOME: 'Coca-Cola 350ml', PRECO: 5.50 },
    { ID: 2, NOME: 'Fanta 350ml', PRECO: 5.00 },
    { ID: 3, NOME: 'Guaraná 350ml', PRECO: 5.00 },
    { ID: 4, NOME: 'Água 500ml', PRECO: 3.50 },
    { ID: 5, NOME: 'Água com Gás 500ml', PRECO: 4.00 },
  ];


  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    // Qualquer inicialização adicional, se necessário
  }

  addToCart(bebida: Food): void {
    this.cartService.addToCart({
      ...bebida,
      QUANTITY: 1, // Define a quantidade inicial como 1
    });
  }
}
