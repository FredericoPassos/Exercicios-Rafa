const inputSenha = document.querySelector('#senha');
const botao = document.querySelector('#botao');

botao.addEventListener('click', () => {
  const antigaDiv = document.querySelector('#nova-div');
  if (antigaDiv !== null) antigaDiv.remove();
  const novaDiv = document.createElement('div');
  novaDiv.id = 'nova-div';
  document.body.appendChild(novaDiv);
  if (inputSenha.value === '1234') {
    novaDiv.classList.add('verde');
    novaDiv.innerHTML = 'Senha correta!';
  } else {
    novaDiv.classList.add('vermelho');
    novaDiv.innerHTML = 'Senha incorreta!';
  }
});

document.querySelectorAll('.numero').forEach((botao) => {
  botao.addEventListener('click', () => (inputSenha.value += botao.value));
});
