// class Endereco {
//   constructor(rua, numero, bairro, cidade, estado) {
//     this.rua = rua;
//     this.numero = numero;
//     this.bairro = bairro;
//     this.cidade = cidade;
//     this.estado = estado;
//   }

//   enderecoCompleto() {
//     return `${this.rua}, nº ${this.numero} - ${this.bairro}, ${this.cidade}/${this.estado}`;
//   }
// }

// const meuEndereco = new Endereco(
//   "Estrada Municipal Cachoeira dos Nasser",
//   "S/N",
//   "Domingos de Sylos",
//   "São José do Rio Pardo",
//   "SP"
// );

// console.log(meuEndereco);

// console.log("");

// //--------------------------------------------------------

// class Pessoa {
//   constructor(nome, sobrenome, idade, endereco) {
//     this.nome = nome;
//     this.sobrenome = sobrenome;
//     this.idade = idade;
//     this.endereco = endereco;
//   }
// }

// const andrew = new Pessoa("Andrew", "Gomes", 36, meuEndereco);

// console.log(andrew);

// console.log(andrew.endereco.enderecoCompleto());

// console.log("");

//--------------------------------------------------------

class Comentario {
  constructor(usuario, conteudo) {
    this.usuario = usuario;
    this.conteudo = conteudo;
    this.criadoEm = new Date();
  }
}

console.log("");

//--------------------------------------------------------

class Post {
  constructor(titulo, conteudo, autor) {
    this.titulo = titulo;
    this.conteudo = conteudo;
    this.autor = autor;
    this.comentarios = [];
    this.criadoEm = new Date();
  }

  addComentario(usuario, conteudo) {
    this.comentarios.push(new Comentario(usuario, conteudo));
  }
}

console.log("");

//--------------------------------------------------------

class Autor {
  constructor(nome) {
    this.nome = nome;
    this.posts = [];
  }

  escreverPost(titulo, conteudo) {
    const post = new Post(titulo, conteudo, this);
    this.posts.push(post);
    return post;
  }
}

const umAutor = new Autor("Henrique");

const post = umAutor.escreverPost("Sem idéias", "Escrevi e saí correndo...");

post.addComentario("Andrew", "Rachei de rir kkkkk");
post.addComentario("Viviane", "Que idiota kkkkkk");

console.log(post);

console.log(umAutor);
