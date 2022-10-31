function obterErroDaEntrada(entradaInteira) {
  if (isNaN(entradaInteira))
    return 'O card deve ser representado por um número inteiro!';
  if (entradaInteira < 1 || entradaInteira > 6)
    return 'O card deve estar entre 1 e 6!';
  return '';
}

const botao = document.querySelector('#botao');
botao.addEventListener('click', () => {
  const antigaDiv = document.querySelector('#nova-div');
  if (antigaDiv !== null) antigaDiv.remove();
  const obtidos = {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
  };
  const entradas = {
    a: document.querySelector('#valor-a').value,
    b: document.querySelector('#valor-b').value,
    c: document.querySelector('#valor-c').value,
    d: document.querySelector('#valor-d').value,
    e: document.querySelector('#valor-e').value,
  };
  const novaDiv = document.createElement('div');
  novaDiv.id = 'nova-div';
  document.body.appendChild(novaDiv);
  let erros = '';
  console.log(entradas);
  for (let chave in entradas) {
    let erro = obterErroDaEntrada(parseInt(entradas[chave]));
    if (erro !== '') erros += 'Valor ' + chave + ': ' + erro + '<br>';
    else {
      if (obtidos[parseInt(entradas[chave])] === true)
        erros += 'Valor ' + chave + ': duplicado!' + '<br>';
      else obtidos[parseInt(entradas[chave])] = true;
    }
  }
  if (erros === '') {
    for (let chave in obtidos) {
      if (obtidos[chave] === false)
        novaDiv.innerHTML = 'O card ' + chave + ' é o faltante!';
    }
    novaDiv.classList.add('verde');
  } else {
    novaDiv.classList.add('vermelho');
    novaDiv.innerHTML = erros;
  }
});
