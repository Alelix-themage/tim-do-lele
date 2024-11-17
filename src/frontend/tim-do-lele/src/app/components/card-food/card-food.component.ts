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

  constructor(private getFood: GetFoodService, private cartService: CartService) {}

  ngOnInit(): void {
    this.getFood.getDataFood().subscribe(data => {
      this.lanches = data;
    });
  }

  isSauceOpen = false;

  toggleSauceOptions(): void {
    this.isSauceOpen = !this.isSauceOpen;
  
    // Ajustar a altura do popup dinamicamente (se necessário)
    const detailsContent = document.querySelector('.details-content') as HTMLElement;
    if (detailsContent) {
      if (this.isSauceOpen) {
        detailsContent.style.height = 'auto'; // Deixa a altura aumentar conforme o conteúdo
      } else {
        detailsContent.style.height = ''; // Remove qualquer altura fixa
      }
    }
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
