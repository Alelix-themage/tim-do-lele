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
  @Output() cartClicked = new EventEmitter<void>(); // Evento para o carrinho

  toggleSearchForm() {
    this.searchForm.nativeElement.classList.toggle('active');
  }

  onCartClick() {
    this.cartClicked.emit();  // Emite evento para abrir o carrinho
  }
}
