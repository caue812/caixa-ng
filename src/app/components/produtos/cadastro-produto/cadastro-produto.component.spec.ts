import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroProdutoComponent } from './cadastro-produto.component';
import { FormsModule } from '@angular/forms';

describe('CadastroProdutoComponent', () => {
  let component: CadastroProdutoComponent;
  let fixture: ComponentFixture<CadastroProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [CadastroProdutoComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CadastroProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increment ID for each new product', () => {
    component.nome = 'Produto 1';
    component.salvarProduto(); 
    expect(component.produtos.length).toBe(1);
    expect(component.produtos[0].id).toBe(1);

    component.nome = 'Produto 2';
    component.salvarProduto();  
    expect(component.produtos.length).toBe(2);
    expect(component.produtos[1].id).toBe(2);
  });
});
