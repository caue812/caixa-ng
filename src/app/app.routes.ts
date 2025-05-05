import { Routes } from '@angular/router';
import { ClienteComponent } from './components/clientes/cliente/cliente.component';
import { CadastroReceitaComponent } from './components/receitas/cadastro-receita/cadastro-receita.component';

export const routes: Routes = [
    {path: "clientes", component: ClienteComponent},
    {path: "receitas", component: CadastroReceitaComponent}
];
