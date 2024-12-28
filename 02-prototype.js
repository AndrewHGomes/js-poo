const texto = "Herdei propriedades e métodos.";

console.log(Object.getPrototypeOf(texto));

const obj = {
  teste: "testando",
};

console.log(Object.getPrototypeOf(obj));

const outroObj = Object.create(obj);

console.log(outroObj);

console.log(outroObj.teste);
