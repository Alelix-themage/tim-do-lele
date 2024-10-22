import { CommonModule } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import Swal from 'sweetalert2';

//services
import { CadastroService } from 'app/service/cadastro.service';

@Component({
  selector: 'app-tela-cadastro',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule, RouterOutlet, ReactiveFormsModule],
  templateUrl: './tela-cadastro.component.html',
  styleUrl: './tela-cadastro.component.scss'
})
export class TelaCadastroComponent implements OnInit {
  email: string | undefined;
  senha: string | undefined;
  confimar_senha: string | undefined;
  telefone: string |  undefined

  constructor(
    private cadastroService: CadastroService
  ){}

  ngOnInit(): void {
      
  }

  onSubmit(form: any): void {
    const data = form.value;
    const nome = form.value.nome;
    const email = form.value.email;
    const senha = form.value.senha;
    const confirmar_senha = form.value.confimar_senha;
    const telefone = form.value.telefone;

    if(IsEmptyVar(nome)){
      alert("Não é possível fazer cadastro com o campo Nome em branco. Por favor, tente novamente!")
    }
    if(IsEmptyVar(email)){
      alert("Não é possível fazer cadastro com o campo Email em branco. Por favor, tente novamente!")
    }
    if(IsEmptyVar(senha)){
      alert("Não é possível fazer cadastro com o campo Senha em branco. Por favor, tente novamente!")
    }
    if(IsEmptyVar(confirmar_senha)){
      alert("Não é possível fazer cadastro com o campo Confirmar Senha em branco. Por favor, tente novamente!")
    }
    if(IsEmptyVar(telefone)){
      alert("Não é possível fazer cadastro com o campo telefone em branco. Por favor, tente novamente!")
    }

    if(senha != confirmar_senha){
      alert("As senhas estão diferentes, por favor cheque novamente!")
    }

    else{
      //enviou das respostas do cadastro
      this.cadastroService.postDataCadastro(data).subscribe({
        next: (dados) => {
          console.log("Dados enviados com sucesso!")
          mostrarAlert(form)
        },
        error: (erro) => {
          console.error("Erro ao enviar cadastro ao backend.", erro)
          alert("Erro ao realizar o cadastro!")
          form.reset();
        }
      })
    }
  }






  //design do front
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

//Função que trata string não apropriadas
function IsEmptyVar(value : any) : boolean  {
  return value === null || value == undefined || (typeof value === "string" && value.trim() == '')
} 

function mostrarAlert(form: any) : void {
  Swal.fire({
    title: 'Parabéns!',
    text: 'Seu cadastro foi concluído com suceso!',
    icon: 'success',
    confirmButtonText: 'Ok'
  });
  form.reset()
}
