import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent {

  nome: string = "";  // Nome do produto
  produtos: Array<any> = [];  // Lista de produtos
  produtoParaEditar: any | undefined;  // Produto para editar, se houver

  // Função para salvar produto (cadastrar ou editar)
  salvarProduto() {
    if (this.nome.length < 3) {
      alert("Nome deve conter no mínimo 3 caracteres");
      return;
    }
    if (this.nome.length > 30) {
      alert("Nome deve conter no máximo 30 caracteres");
      return;
    }

    // Se produtoParaEditar estiver definido, significa que estamos editando um produto
    if (this.produtoParaEditar) {
      this.editarProduto();
    } else {
      this.cadastrarProduto();
    }

    // Limpar o campo de nome após salvar
    this.nome = "";
  }

  // Função para cadastrar um novo produto
  cadastrarProduto() {
    let produto = {
      id: this.produtos.length + 1,  // Gerando o ID de forma simples
      nome: this.nome,
      valor: 10  // Exemplo de valor, você pode modificar conforme necessário
    };
    this.produtos.push(produto);  // Adicionando o produto à lista
  }

  // Função para editar um produto existente
  editarProduto() {
    if (this.produtoParaEditar) {
      this.produtoParaEditar.nome = this.nome;  // Atualizando o nome do produto
      this.produtoParaEditar.valor = 20;  // Atualizando o valor do produto (ajuste conforme necessário)
    }
    this.produtoParaEditar = undefined;  // Limpa a variável de edição
  }

  // Função chamada ao clicar no botão de editar de um produto específico
  iniciarEdicao(produto: any) {
    this.nome = produto.nome;  // Preenche o campo com o nome do produto
    this.produtoParaEditar = produto;  // Marca o produto para edição
  }

  // Função para apagar um produto
  apagarProduto(produto: any) {
    this.produtos = this.produtos.filter(p => p.id !== produto.id);
  }

  // Função trackBy para o *ngFor
  trackProduto(index: number, produto: any): number {
    return produto.id;  // Retorna o ID do produto para otimizar a renderização
  }
}
