function criarTabela() {
  const antigaTabela = document.querySelector('#tabela');
  if (antigaTabela !== null) antigaTabela.remove();
  const primeiraLinha = document.createElement('tr');
  const id = document.createElement('th');
  id.textContent = 'Id';
  primeiraLinha.appendChild(id);
  const nome = document.createElement('th');
  nome.textContent = 'Nome';
  primeiraLinha.appendChild(nome);
  const email = document.createElement('th');
  email.textContent = 'Email';
  primeiraLinha.appendChild(email);
  const idade = document.createElement('th');
  idade.textContent = 'Idade';
  primeiraLinha.appendChild(idade);
  const cargo = document.createElement('th');
  cargo.textContent = 'Cargo';
  primeiraLinha.appendChild(cargo);
  const tabela = document.createElement('table');
  document.body.appendChild(tabela);
  tabela.appendChild(primeiraLinha);
  tabela.id = 'tabela';
  return tabela;
}

const pessoas = [
  {
    id: 1,
    nome: 'Raimundo',
    email: 'raimundo-escola@gmail.com',
    idade: 89,
    cargo: 'professor',
  },
  {
    id: 2,
    nome: 'Mazarito',
    email: 'mazari@gmail.com',
    idade: 41,
    cargo: 'aluno',
  },
  {
    id: 3,
    nome: 'Nerso da Capitinga',
    email: 'sou_nerso@gmail.com',
    idade: 39,
    cargo: 'aluno',
  },
  {
    id: 4,
    nome: 'Catifunda',
    email: 'catfunda63@gmail.com',
    idade: 56,
    cargo: 'aluno',
  },
  {
    id: 5,
    nome: 'Dona Bela',
    email: 'belinha@gmail.com',
    idade: 44,
    cargo: 'aluna',
  },
  {
    id: 6,
    nome: 'Seu Boneco',
    email: 'bonecoboneco@gmail.com',
    idade: 62,
    cargo: 'aluno',
  },
  {
    id: 7,
    nome: 'Marina da Glória',
    email: 'ma-gloria@gmail.com',
    idade: 57,
    cargo: 'aluna',
  },
  {
    id: 8,
    nome: 'Baltazar da Rocha',
    email: 'rocha&rocha@gmail.com',
    idade: 77,
    cargo: 'aluno',
  },
  {
    id: 9,
    nome: 'Cacilda',
    email: 'cacillllda@gmail.com',
    idade: 63,
    cargo: 'aluna',
  },
  {
    id: 10,
    nome: 'Rolando Lero',
    email: 'lero123@gmail.com',
    idade: 53,
    cargo: 'aluno',
  },
];
const botao = document.querySelector('#botao');

botao.addEventListener('click', () => {
  const tabela = criarTabela();
  for (let pessoa of pessoas) {
    const tr = document.createElement('tr');
    const id = document.createElement('td');
    id.textContent = pessoa.id;
    tr.appendChild(id);
    const nome = document.createElement('td');
    nome.textContent = pessoa.nome;
    tr.appendChild(nome);
    const email = document.createElement('td');
    email.textContent = pessoa.email;
    tr.appendChild(email);
    const idade = document.createElement('td');
    idade.textContent = pessoa.idade;
    tr.appendChild(idade);
    const cargo = document.createElement('td');
    cargo.textContent = pessoa.cargo;
    tr.appendChild(cargo);
    tabela.appendChild(tr);
  }
});
