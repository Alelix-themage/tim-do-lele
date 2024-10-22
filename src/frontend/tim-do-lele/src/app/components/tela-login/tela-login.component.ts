import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForm, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tela-login',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.scss'] // Corrigir para "styleUrls"
})
export class TelaLoginComponent {
  constructor() {}

  validarlogin(form: NgForm): void {
    // Verifica se o formulário é válido
    if (form.valid) {
      console.log('Formulário válido');
      // Aqui você pode adicionar a lógica de login
      console.log('Email:', form.value.email);
      console.log('Senha:', form.value.password);
    } else {
      console.log('Formulário inválido');
    }
  }
}
