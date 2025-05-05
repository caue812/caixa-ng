export class Produto {
    constructor(
      public id: number,
      public nome: string,
      public valor: number = 0,
      public categoria?: string,
      public quantidade?: number,
      public precoUnitario?: number,
      public vencido?: boolean,
      public estoque?: boolean,
      public descricao?: string
    ) {}
  }
  