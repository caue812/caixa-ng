// A LocalStorage API é uma funcionalidade do navegador que permite armazenar dados localmente no dispositivo do usuário, de forma persistente e sem data de expiração. Isso significa que as informações gravadas permanecem disponíveis mesmo após o usuário fechar o navegador ou reiniciar o computador. Essa API faz parte do Web Storage, junto com o sessionStorage, e funciona com pares chave-valor, onde tanto a chave quanto o valor são armazenados como strings. É muito útil para guardar preferências do usuário, dados de sessões, temas escolhidos, ou qualquer outra informação que precise ser mantida entre visitas ao site. O acesso ao localStorage é feito por meio de métodos simples: setItem() para armazenar, getItem() para recuperar, removeItem() para apagar e clear() para limpar todos os dados. Como os dados ficam no navegador do cliente, é importante lembrar que não se deve armazenar informações sensíveis como senhas ou dados bancários.


// Exemplo de uso do localStorage para armazenar uma string

// 1. Armazenando uma string no localStorage
localStorage.setItem('nomeUsuario', 'Maria');

// 2. Recuperando a string armazenada
const nome = localStorage.getItem('nomeUsuario');
console.log('Nome armazenado:', nome); // Deve exibir: Nome armazenado: Maria

// 3. Atualizando o valor da string
localStorage.setItem('nomeUsuario', 'João');

// 4. Verificando o novo valor armazenado
const nomeAtualizado = localStorage.getItem('nomeUsuario');
console.log('Nome atualizado:', nomeAtualizado); // Deve exibir: Nome atualizado: João

// 5. Removendo o item do localStorage
localStorage.removeItem('nomeUsuario');

// 6. Tentando acessar o valor após a remoção
const nomeRemovido = localStorage.getItem('nomeUsuario');
console.log('Após remoção:', nomeRemovido); // Deve exibir: Após remoção: null