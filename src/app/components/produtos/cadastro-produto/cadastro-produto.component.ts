import { Component } from '@angular/core';
import { Produto } from '../../../models/produto';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [FormsModule],
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent {
  nome: string = '';
  categoria: string = '';
  quantidade?: number;
  precoUnitario?: number;
  vencido?: boolean;
  estoque?: boolean;
  descricao: string = '';

  produtos: Produto[] = [];
  produtoParaEditar?: Produto;

  proximoId: number = 1; 

  categoriasDisponiveis: string[] = ['Alimentos', 'Limpeza', 'Bebidas', 'Outros'];

  salvarProduto(): void {
    if (this.nome.trim().length < 3 || this.nome.trim().length > 30) {
      alert("Nome deve conter entre 3 e 30 caracteres");
      return;
    }

   
    if (this.produtoParaEditar) {
      this.editarProduto();
    } else {
      this.cadastrarProduto();
    }

    // Limpar o formulário após salvar
    this.limparFormulario();
  }

  cadastrarProduto(): void {
    // Usar o proximoId para garantir IDs sequenciais
    const novoProduto = new Produto(
      this.proximoId++,  // Gera ID único e sequencial
      this.nome,
      this.precoUnitario ?? 0,
      this.categoria,
      this.quantidade,
      this.precoUnitario,
      this.vencido,
      this.estoque,
      this.descricao
    );
    this.produtos.push(novoProduto);
    this.ordenarProdutos(); // Ordena os produtos por ID
  }

  editarProduto(): void {
    if (this.produtoParaEditar) {
      Object.assign(this.produtoParaEditar, {
        nome: this.nome,
        categoria: this.categoria,
        quantidade: this.quantidade,
        precoUnitario: this.precoUnitario,
        vencido: this.vencido,
        estoque: this.estoque,
        descricao: this.descricao,
        valor: this.precoUnitario ?? 0
      });
      this.produtoParaEditar = undefined; // Limpa o produto em edição
      this.ordenarProdutos(); // Ordena os produtos por ID
    }

  }

  iniciarEdicao(produto: Produto): void {
    this.produtoParaEditar = produto;
    this.nome = produto.nome;
    this.categoria = produto.categoria ?? '';
    this.quantidade = produto.quantidade;
    this.precoUnitario = produto.precoUnitario;
    this.vencido = produto.vencido;
    this.estoque = produto.estoque;
    this.descricao = produto.descricao ?? '';
  }

  apagarProduto(produto: Produto): void {
    // Remove o produto da lista
    this.produtos = this.produtos.filter(p => p.id !== produto.id);
    if (this.produtoParaEditar?.id === produto.id) {
      this.produtoParaEditar = undefined; // Limpa o produto em edição se for apagado
    }
    this.ordenarProdutos(); // Ordena novamente após remoção
  }

  trackProduto(index: number, produto: Produto): number {
    return produto.id;  // A chave única para otimizar o *ngFor
  }

  limparFormulario(): void {
    this.nome = '';
    this.categoria = '';
    this.quantidade = undefined;
    this.precoUnitario = undefined;
    this.vencido = undefined;
    this.estoque = false;
    this.descricao = '';
  }

  ordenarProdutos(): void {
    this.produtos.sort((a, b) => a.id - b.id);  // Ordena os produtos pela ID de forma crescente
  }
}
