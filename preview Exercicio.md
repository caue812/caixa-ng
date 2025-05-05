exercicios 

crud do produto 
 
deve conter os seguintes campos (id, nome)

criar o componente componentes\produtos\cadastro-produto

cd .\src\app\
ng generate component components\produtos\cadastro-produto

-criar o modelo models/produto.ts
colocar os campos (utilizar como modelo receita.ts)
-criar o html e o ts
adicionar os campo para nome e botão salvar
fazer a função dp salvar
adicionar listagem 
adicionar função para apagar
adicionar função para editar
adicionar os campos:
categoria(campo do tipo select)
quantidade(campo do tipo input number )
preço unitário (campo do tipo input number)
vencido (radio button para "sim" e outro radio button para "Não) os dois utilizam o mesmo ng model 
estoque(campo do tipo input checkbox)
descrisao(campo do tipo textarea)