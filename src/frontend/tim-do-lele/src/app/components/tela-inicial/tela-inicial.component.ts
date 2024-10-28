import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
//service
import { GetFoodService } from 'app/service/get-food.service';

//modelo
import { Food } from '../Food.model';

@Component({
  selector: 'app-tela-inicial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tela-inicial.component.html',
  styleUrl: './tela-inicial.component.scss'
})
export class TelaInicialComponent implements OnInit {
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
