// models/estoque.ts
export class Estoque {
  constructor(
    public id: number,
    public nome: string,
    public quantidade?: number,
    public categoria?: string,
    public dataEntrada?: Date
  ) {}
}
