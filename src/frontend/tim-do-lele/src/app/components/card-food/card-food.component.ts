import { Component, OnInit } from '@angular/core';
import { GetFoodService } from 'app/service/get-food.service';
import { Food } from 'app/components/Food.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-food',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-food.component.html',
  styleUrls: ['./card-food.component.scss']
})
export class CardFoodComponent implements OnInit {
  lanches: Food[] = [];
  isPopupOpen = false;
  selectedLanche: Food | null = null;

  constructor(private getFood: GetFoodService) {}

  ngOnInit(): void {
    this.getFood.getDataFood().subscribe(data => {
      this.lanches = data;
    });
  }

  openPopup(lanche: Food): void {
    this.selectedLanche = lanche;
    this.isPopupOpen = true;
  }

  closePopup(): void {
    this.isPopupOpen = false;
    this.selectedLanche = null;
  }

  // fechar se clicar fora
  onBackdropClick(event: Event): void {
    this.closePopup();
  }

  // formata o preço passado por parametro
  get formattedPrice(): string {
    return this.selectedLanche && this.selectedLanche.PRECO !== undefined
      ? this.selectedLanche.PRECO.toFixed(2).replace('.', ',')
      : '0,00';
  }
}
