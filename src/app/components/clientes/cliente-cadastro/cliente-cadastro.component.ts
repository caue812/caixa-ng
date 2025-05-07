import { Component, EventEmitter, Input, input, Output, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../../../models/cliente';

@Component({
  selector: 'app-cliente-cadastro',
  imports: [FormsModule],
  templateUrl: './cliente-cadastro.component.html',
  styleUrl: './cliente-cadastro.component.css'
})
export class ClienteCadastroComponent {
  // Evento de saída que permite ao componente filho (ClienteCadastroComponent)
  // enviar uma string para o componente pai (ClienteComponent)
  @Output() salvarEvento = new EventEmitter<void>();

  // O componete pai vai passar o objeto do cliente de acordo com modo:
  // - modo de cadastro os campos do cliente estarão vazios
  // - modo de editar os campos do cliente estarão preenchidos
  @Input() cliente?: Cliente;


  salvar() {
    if(this.isFormValid() == false)
      return;

    this.salvarEvento.emit();
  }

  private isFormValid(){
    if (this.cliente?.nome.trim() == ""){
      alert("Nome deve ser preenchido")
      return false;
    }

    if(this.cliente?.nome.trim().length! < 3){
      alert("Nome deve conter no mínimo 3 caracteres")
      return false;
    }

    if(this.cliente?.cpf.trim() == ""){
      alert("CPF deve ser preechido")
      return false;
    }

    const regexCpf = /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}$/

    if  (regexCpf.test(this.cliente?.cpf!) == false){
      alert("CPF deve ser preenchido no formato 000.000.000-00")
      return false;
    }
    return true
  }
}  