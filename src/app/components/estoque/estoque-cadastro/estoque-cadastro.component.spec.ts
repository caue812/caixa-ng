import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstoqueCadastroComponent } from './estoque-cadastro.component';
import { FormsModule } from '@angular/forms';


describe('EstoqueCadastroComponent', () => {
  let component: EstoqueCadastroComponent;
  let fixture: ComponentFixture<EstoqueCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [EstoqueCadastroComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(EstoqueCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increment ID for each new product', () => {
    component.nome = 'Estoque 1';
    component.salvarEstoque(); 
    expect(component.estoques.length).toBe(1);
    expect(component.estoques[0].id).toBe(1);

    component.nome = 'Estoque 2';
    component.salvarEstoque();  
    expect(component.estoques.length).toBe(2);
    expect(component.estoques[1].id).toBe(2);
  });
});
