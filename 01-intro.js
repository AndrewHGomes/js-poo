const pet = {
  nome: "Vitória",
  latir: function () {
    console.log("Au au");
  },
};

console.log(pet.nome);
pet.latir();

console.log("");

//-----------------------------------------------

const pessoa = {
  nome: "Andrew",

  getNome: function () {
    return `Meu nome é ${this.nome}`;
  },

  setNome: function (novoNome) {
    this.nome = novoNome;
  },
};

console.log(pessoa.getNome());
pessoa.setNome("Viviane");
console.log(pessoa.getNome());

console.log("");

//-------------------------------------------------

const livro = {
  titulo: "As seis lições",
  paginas: 198,
  publicado: true,
  noEstoque: 25,
  tags: ["Política", "Economia", "Ciências Políticas"],
  autor: {
    nome: "Ludwig Von Mises",
  },

  addEstoque(quantidade) {
    this.noEstoque += quantidade;
  },

  salvar: function () {
    console.log("Foi salvo no DB");
  },
};

livro.addEstoque(21);

console.log(livro);

console.log("");
