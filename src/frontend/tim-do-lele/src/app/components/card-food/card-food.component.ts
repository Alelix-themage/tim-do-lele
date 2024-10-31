import { Component, OnInit } from '@angular/core';


//service
import { GetFoodService } from 'app/service/get-food.service';

//modelo
import { Food } from 'app/components/Food.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-card-food',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-food.component.html',
  styleUrl: './card-food.component.scss'
})
export class CardFoodComponent implements OnInit {

  constructor(
    private getFood: GetFoodService,
  ){}

  lanches: Food[] = []

  ngOnInit(): void {
      this.getFood.getDataFood().subscribe( data => {
          this.lanches = data
      }
  )}
}
