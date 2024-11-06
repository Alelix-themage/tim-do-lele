import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForm, FormsModule } from '@angular/forms';

//services
import { AutenticarService } from 'app/service/autenticar-login.service';

@Component({
  selector: 'app-tela-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.scss']
})

export class TelaLoginComponent {
  constructor(
    private autenticarService: AutenticarService
  ) {}

  data: any [] = [];
  email: string |undefined;
  senha: string | undefined;

  // Método para validar login
  validarlogin(form: NgForm) {
    if (form.invalid) {
      console.log('Formulário inválido!');
      return;
    }

    this.data = form.value;
    this.email = form.value.email
    this.senha = form.value.password

    // console.log(this.data)
    
    // this.data = [this.email, this.senha]
    //envio das credenciais ao backend
    this.autenticarService.postLogin(this.data).subscribe( {
        next: (data) => {
          console.log("Dados enviados com sucesso.", data);
        },
        error: (erro) => {
          console.error("Erro logar na conta.", erro);
          form.reset();
        }
      });
  }




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
