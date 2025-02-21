function Animal (idade, especie, numPatas) {
    this.idade = idade;
    this.especie = especie;
    this.numPatas = numPatas;

    this.getSom = function(){
        console.log("Som de um Animal")
    }
}

function Cachorro(nome, idade, especie, numPatas, doente) {
    Animal.call(this, idade, especie, numPatas);
   
    this.nome = nome;
    this.doente = doente;

    this.getSom = function() {
        return `O som do ${especie} é Au Au!`
    }
}

function Gato(nome, idade, cor, especie, numPatas, doente) {
    Animal.call(this, idade, especie, numPatas);
   
    this.nome = nome;
    this.doente = doente;
    this.cor = cor;
    
    this.getSom = function() {
        return `O som do ${especie} da cor ${cor} é Miau Miau!`
    }
}

const cachorro = new Cachorro("Rex", 3, "Canino", 4, true);
const gato = new Gato("Mike", 3, "Preto","Felino", 4, false);


console.log(cachorro);
console.log(cachorro.getSom());
console.log('\n')
console.log(gato);
console.log(gato.getSom());

