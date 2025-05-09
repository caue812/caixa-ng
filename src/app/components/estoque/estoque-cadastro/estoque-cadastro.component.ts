import { Component, EventEmitter, Input, Output, OnChanges } from '@angular/core';
import { Estoque } from '../../../models/estoque';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './estoque-cadastro.component.html',
  styleUrls: ['./estoque-cadastro.component.css']
})
export class CadastroEstoqueComponent implements OnChanges {
  @Input() estoque?: Estoque;
  @Output() salvarEvento = new EventEmitter<Estoque[]>();

  nome: string = '';
  quantidade?: number;
  categoria: string = '';
  dataEntrada: string = '';
  estoques: Estoque[] = [];
  proximoId: number = 1;
  estoqueEditando?: Estoque;

  categoriasDisponiveis = ['Alimentos', 'Limpeza', 'Bebidas'];

  ngOnChanges() {
    if (this.estoque) {
      this.estoqueEditando = this.estoque;
      this.nome = this.estoque.nome;
      this.quantidade = this.estoque.quantidade;
      this.categoria = this.estoque.categoria || '';
      this.dataEntrada = this.estoque.dataEntrada?.toISOString().split('T')[0] || '';
    }
  }

  salvarEstoque() {
    if (!this.nome || this.nome.length < 3) {
      alert('Nome deve ter pelo menos 3 letras.');
      return;
    }

    if (!this.dataEntrada) {
      alert('Informe a data.');
      return;
    }

    if (this.estoqueEditando) {
      this.estoqueEditando.nome = this.nome;
      this.estoqueEditando.quantidade = this.quantidade;
      this.estoqueEditando.categoria = this.categoria;
      this.estoqueEditando.dataEntrada = new Date(this.dataEntrada);
    } else {
      const novo = new Estoque(
        this.proximoId++,
        this.nome,
        this.quantidade,
        this.categoria,
        new Date(this.dataEntrada)
      );
      this.estoques.push(novo);
    }

    this.salvarEvento.emit(this.estoques);
    this.limparFormulario();
  }

  limparFormulario() {
    this.nome = '';
    this.quantidade = undefined;
    this.categoria = '';
    this.dataEntrada = '';
    this.estoqueEditando = undefined;
  }
}
