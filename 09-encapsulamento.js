class Conta {
  #senha;
  #saldo = 0;
  constructor(email, senha) {
    this.email = usuario.email;
    this.#senha = usuario.senha;
  }

  getSaldo(email, senha) {
    if (this.#autenticar(email, senha)) {
      return `Seu saldo é de R$ ${this.#saldo.toFixed(2)}`;
    } else {
      return `Usuário não encontrado! Verifique email e senha.`;
    }
  }

  #autenticar(email, senha) {
    return this.email === email && this.#senha === senha;
  }
}

const usuario = {
  email: "andrew@email.com",
  senha: 4321,
};

const minhaConta = new Conta(usuario);

console.log(minhaConta);

const usuarioVerSaldo = minhaConta.getSaldo(usuario.email, usuario.senha);

console.log(usuarioVerSaldo);

console.log(minhaConta.getSaldo("outro@email.com", 1234));
