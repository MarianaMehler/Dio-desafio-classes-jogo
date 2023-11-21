// Criando classes de heroi de um jogo

class heroi{
    constructor(nome, idade, tipo, ataque){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.ataque = ataque
    }

    atacar(){
        console.log(`O ${this.tipo} atacou usando ${this.ataque}`)
    }
}

let tipoMago = new heroi(undefined, undefined, "mago", "magia")
let tipoGuerreiro = new heroi(undefined, undefined, "guerreiro", "espada")
let tipoMonge = new heroi(undefined, undefined, "monge", "artes marciais")
let tipoNinja = new heroi(undefined, undefined, "ninja", "shuriken")

tipoMago.atacar()
tipoGuerreiro.atacar()
tipoMonge.atacar()
tipoNinja.atacar()