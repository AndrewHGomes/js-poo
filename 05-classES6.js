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
