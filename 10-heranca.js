class Propriedade {
  constructor(area, preco) {
    this.area = area;
    this.preco = preco;
  }

  getPrecoPorMetroQuadrado() {
    const precoPorMetroQuadrado = this.preco / this.area;
    return `Preço por metro²: R$ ${precoPorMetroQuadrado.toFixed(2)}`;
  }
}

const terreno = new Propriedade(200, 100000);

console.log(terreno);
console.log(terreno.getPrecoPorMetroQuadrado());

console.log("");

//---------------------------------------

class Casa extends Propriedade {
  constructor(endereco, numero, area, preco) {
    super(area, preco);
    this.endereco = endereco;
    this.numero = numero;
  }

  getEndereco() {
    return `${this.endereco}, nº ${this.numero}.`;
  }
}

const casa = new Casa("Rua dos Bobos", 0, 100, 250000);

console.log(casa);
console.log(casa.getEndereco());
console.log(casa.getPrecoPorMetroQuadrado());

console.log("");

//---------------------------------------

class Apartamento extends Propriedade {
  constructor(endereco, numero, area, preco) {
    super(area, preco);
    this.endereco = endereco;
    this.numero = numero;
  }

  getAndar() {
    const andar = this.numero / 5;
    return Math.abs(andar);
  }

  getEndereco() {
    return `${this.endereco}, nº ${this.numero} - ${this.getAndar()}º andar.`;
  }
}

const apartamento = new Apartamento("Logo Alí", 30, 85, 180000);

console.log(apartamento);
console.log(apartamento.getEndereco());
console.log(apartamento.getPrecoPorMetroQuadrado());
