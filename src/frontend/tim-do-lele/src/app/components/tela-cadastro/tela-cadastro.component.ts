import { Component } from '@angular/core';

@Component({
  selector: 'app-tela-cadastro',
  standalone: true,
  imports: [],
  templateUrl: './tela-cadastro.component.html',
  styleUrl: './tela-cadastro.component.scss'
})
export class TelaCadastroComponent {
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
}
