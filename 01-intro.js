const pet = {
  nome: "Vitória",
  latir: function () {
    console.log("Au au");
  },
};

console.log(pet.nome);
pet.latir();

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
