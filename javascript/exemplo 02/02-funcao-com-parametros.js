//Declarando a função

function Soma(a, b){
    return a + b;
}

//Declarando as variaveis
var num1 = 0, num2 = 0;

//Solicitando os valores para o usuarios
num1 = parseInt(prompt('Digite um numero: '));
num2 = parseInt(prompt('Digite outro numero: '));

//Mostrando o resultado na tela
document.getElementById('teste').innerHTML += Soma(num1, num2);
