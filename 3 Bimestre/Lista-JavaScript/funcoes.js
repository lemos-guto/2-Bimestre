let lista = [10, 5, 2, 6, 124, 64, "Mateus Cruzatto"]

//Ex1 - Escrever Texto
function escreva(texto){
    console.log(texto);
}
escreva("Meu amor por ti é maior do que uma girafa!")

//Ex2 - Soma
function soma(x, y) {
    return x + y;
}
console.log(soma(5,5));

//Ex5 - Elevado ao Quadrado
function calcularQuadrado(num){
    return Math.pow(num, 2);
}
console.log(calcularQuadrado(3));

//Ex6 - Elevado ao Cubo
function calcularCubo(num){
    return Math.pow(num, 3);
}
console.log(calcularCubo(3));

//Ex7 - Calcular Potencia
function calcularPotencia(num, potencia){
    return Math.pow(num, potencia)
}
console.log(calcularPotencia(3,3));

//Ex9 - IMC
function imc(peso, altura){
    return peso /(altura * altura);
}
console.log(imc(70, 1.83));

//Ex10 - Calcular Area Quadrado
function areaQuadrado(lado) {
    return lado * lado;
}
console.log(areaQuadrado(5.0))

//Ex13 - Mostrar Lista
function mostrarLista (lista){
    lista.forEach(valor => {
        console.log(valor)
    });
}
mostrarLista(lista);