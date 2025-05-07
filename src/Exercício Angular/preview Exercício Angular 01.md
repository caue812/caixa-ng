Fazer o CRUD do produto
deve conter os seguintes campos (id, nome)

criar o componente cadastro-produto

como fazer?

cd src\app\
ng generate component components\produtos\cadastro-produto
criar o modelo em models\produto.ts


adicionar os campo para nome e botão salvar

fazer a função do salvar

adicionar listagem

adicionar função para apagar

adicionar função para editar

Nova parte
Adicionar os campos (cada campo deve ser uma issue no Projects com PR próprio):

categoria (campo do tipo select)

quantidade (campo do tipo input number)

preco unitário (campo do tipo input number)

vencido (radio button para 'Sim' e outro radio button para 'Não') os dois utilizam o mesmo ngModel

estoque (campo do tipo input checkbox)

descricao (campo do tipo textarea)