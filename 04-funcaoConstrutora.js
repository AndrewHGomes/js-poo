function criarCachorro(nome, raca) {
  const cachorro = Object.create({});

  cachorro.nome = nome;
  cachorro.raca = raca;

  return cachorro;
}

const vitoria = criarCachorro("Vitoria", "mestiço pitbull");

console.log(vitoria);

console.log("");

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

console.log("");

//----------------------------------------------------------------

function Livro(titulo, paginas, tags, autor) {
  this.titulo = titulo;
  this.paginas = paginas;
  this.tags = tags;
  this.autor = autor;
  this.publicado = false;
  this.noEstoque = 0;

  this.addEstoque = function addEstoque(quantidade) {
    this.noEstoque += quantidade;
  };

  this.salvarDb = function salvarDb() {
    return "Informações salvas no DB.";
  };
}

const seisLicoes = new Livro(
  "As seis lições",
  198,
  ["Política", "Economia"],
  "Ludwig Von Mises"
);

console.log(seisLicoes);

const minimoEconomia = new Livro(
  "O mínimo sobre economia",
  180,
  ["Economia", "Ciências Políticas"],
  "Rodrigo Constantino"
);

console.log(minimoEconomia);
