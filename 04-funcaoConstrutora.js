function criarCachorro(nome, raca) {
  const cachorro = Object.create({});

  cachorro.nome = nome;
  cachorro.raca = raca;

  return cachorro;
}

const vitoria = criarCachorro("Vitoria", "mestiço pitbull");

console.log(vitoria);

//----------------------------------------------------------------

function Cachorro(nome, raca) {
  this.nome = nome;
  this.raca = raca;
}

const cury = new Cachorro("Cury", "Fox Paulistinha/Pintcher");

console.log(cury);

Cachorro.prototype.uivar = function () {
  console.log("Aauuuuuuuuu");
};

cury.uivar();

console.log(Cachorro.prototype);
