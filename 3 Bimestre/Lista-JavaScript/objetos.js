class Pessoa{
    constructor(nome, idade, genero){
        this.nome = nome;
        this.idade = idade;
        this.genero = genero;
    }
    apresentar(){
        console.log(`Salut, Je m'appelle ${this.nome}, J'ai ${this.idade} ans et Je suis "${this.genero}".`)
    }
}

pessoa1 = new Pessoa("Mateus", 17, "ele/dele");
pessoa1.apresentar();

class Retangulo{
    constructor(altura, largura){
        this.altura = altura;
        this.largura = largura;
    }
    area(){
        return this.largura * this.altura;
    }
}

retangulo1 = new Retangulo(5.0, 6.0);
console.log(retangulo1.area());