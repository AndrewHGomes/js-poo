class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  dizerNome() {
    return `Meu nome é ${this.nome} ${this.sobrenome}`;
  }
}

const viviane = new Pessoa("Viviane", "Rodrigues");
console.log(viviane);
console.log(viviane.dizerNome());

const andrew = new Pessoa("Andrew", "Gomes");
console.log(andrew);
console.log(andrew.dizerNome());

Pessoa.prototype.casado = true;
console.log(andrew.casado);
console.log(viviane.casado);

Pessoa.prototype.sobrenome = "Nada consta";
console.log(andrew.sobrenome, viviane.sobrenome);

console.log("");

//----------------------------------------------------

class Livro {
  constructor(titulo, paginas, tags, autor) {
    this.titulo = titulo;
    this.paginas = paginas;
    this.tags = tags;
    this.autor = autor;
    this.publicado = false;
  }

  publicar() {
    this.publicado = true;
  }
}

const minimoEconomia = new Livro(
  "O mínimo sobre economia",
  189,
  ["Ciências Políticas", "Economia"],
  "Rodrigo Constantino"
);

console.log(minimoEconomia);

minimoEconomia.publicar();

console.log(minimoEconomia);

console.log(minimoEconomia instanceof Livro);
console.log(minimoEconomia instanceof Object);

console.log("");

//----------------------------------------------------

class Usuario {
  constructor(nomeCompleto, email, senha) {
    this.nomeCompleto = nomeCompleto;
    this.email = email;
    this.senha = senha;
  }

  login(email, senha) {
    if (email === this.email && senha === this.senha) {
      return `Olá, ${this.nomeCompleto}! Seu acesso está liberado!`;
    } else {
      return `Dados incorretos! Verifique seu email e senha.`;
    }
  }
}

const irvin = new Usuario("Irvin Rodrigo Gomes", "irvin@email.com", 4321);

console.log(irvin);

console.log(irvin.login());

console.log(irvin.login("irvin@email.com", 4321));

console.log("");

//----------------------------------------------------

class Produto {
  constructor(nome, descricao, preco) {
    this.nome = nome;
    this.descricao = descricao;
    this.preco = preco;
    this.noEstoque = 0;
  }

  addEstoque(quantidade) {
    this.noEstoque += quantidade;
  }

  calcularDesconto(desconto) {
    return this.preco - (this.preco * desconto) / 100;
  }
}

const notebook = new Produto(
  "Notebook",
  ["Samsung", "12g Ram", "512g Rom", "Intel i7"],
  4000
);

notebook.addEstoque(25);

console.log(`Foram adicionadas ${notebook.noEstoque} unidades no estoque.`);

const precoNormal = notebook.preco;
console.log(`Preço: R$ ${precoNormal.toFixed(2)}`);

const precoDesconto15 = notebook.calcularDesconto(15);
console.log(`Preço com desconto: R$ ${precoDesconto15.toFixed(2)}`);
