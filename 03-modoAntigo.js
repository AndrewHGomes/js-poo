const cachorro = {
  raca: null,
  patas: 4,
};

const cury = Object.create(cachorro);
cury.raca = "Fox Paulistinha/Pintcher";

console.log(cury.raca);
console.log(cury.patas);

const vitoria = Object.create(cachorro);
vitoria.raca = "Mestiço Pitbull";

console.log(vitoria.raca);
console.log(vitoria.patas);
