import { Component, OnInit } from '@angular/core';
import { GetFoodService } from 'app/service/get-food.service';
import { CartService } from 'app/service/cart.service';
import { Food } from 'app/components/Food.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-card-food',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-food.component.html',
  styleUrls: ['./card-food.component.scss'],
})
export class CardFoodComponent implements OnInit {
  lanches: Food[] = [];
  isPopupOpen = false;
  selectedLanche: Food | null = null;

  // Propriedade para controlar a exibição das opções de molhos
  isSauceOpen = false;

  sauces = [
    { name: 'Ketchup', selected: false },
    { name: 'Big Mac', selected: false },
    { name: 'Mostarda', selected: false },
    { name: 'Barbecue', selected: false },
    { name: 'Maionese', selected: false },
    { name: 'Pimenta', selected: false },
  ];

  constructor(private getFood: GetFoodService, private cartService: CartService) {}

  ngOnInit(): void {
    this.getFood.getDataFood().subscribe(data => {
      this.lanches = data;
    });
  }

  // Verifica se todos os molhos estão selecionados
  get areAllSaucesSelected(): boolean {
    return this.sauces.every(sauce => sauce.selected);
  }

  toggleAllSauces(): void {
    const newState = !this.areAllSaucesSelected;
    this.sauces.forEach(sauce => (sauce.selected = newState));
  }

  toggleSauce(sauce: { name: string; selected: boolean }): void {
    sauce.selected = !sauce.selected;
  }

  toggleSauceOptions(): void {
    this.isSauceOpen = !this.isSauceOpen;
  }

  openPopup(lanche: Food): void {
    this.selectedLanche = lanche;
    this.isPopupOpen = true;
  }

  onBackdropClick(event: Event): void {
    this.closePopup();
  }

  closePopup(): void {
    this.isPopupOpen = false;
    this.selectedLanche = null;
  }

  addToCart(): void {
    if (this.selectedLanche) {
      this.cartService.addToCart(this.selectedLanche);
      this.closePopup();
    }
  }
}
