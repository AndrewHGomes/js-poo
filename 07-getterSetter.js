class Post {
  constructor(titulo, descricao, tags) {
    this.titulo = titulo;
    this.descricao = descricao;
    this.tags = tags;
  }

  get exibirTitulo() {
    return `Este é o ${this.titulo}`;
  }

  set adicionarTags(tags) {
    const arrayTags = tags.split(", ");
    this.tags = arrayTags;
  }
}

const meuPost = new Post("Título", "Post sobre desenvolvimento web");
console.log(meuPost);

console.log(meuPost.exibirTitulo);

meuPost.adicionarTags = "Programação, Web, Front-end";
