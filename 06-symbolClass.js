class Carro {
  constructor(marca, cor) {
    this.marca = marca;
    this.cor = cor;
  }
}

const fiesta = new Carro("Ford", "preta");
const rodas = Symbol();

Carro.prototype[rodas] = 4;

console.log(fiesta);
console.log(fiesta[rodas]);
