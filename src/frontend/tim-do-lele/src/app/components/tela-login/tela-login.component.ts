import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForm, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tela-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.scss']
})

export class TelaLoginComponent {
  constructor() {}

  showHiddenPass(inputId: string, iconId: string): void {
    const input = document.getElementById(inputId) as HTMLInputElement;
    const iconEye = document.getElementById(iconId) as HTMLElement;

    if (!input || !iconEye) return; // Verifica se os elementos existem

    if (input.type === 'password') {
      // Trocar para texto
      input.type = 'text';

      // Alterar ícone
      iconEye.classList.add('ri-eye-line');
      iconEye.classList.remove('ri-eye-off-line');
    } else {
      // Trocar para senha
      input.type = 'password';

      // Alterar ícone
      iconEye.classList.remove('ri-eye-line');
      iconEye.classList.add('ri-eye-off-line');
    }
  }

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
