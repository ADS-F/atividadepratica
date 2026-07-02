//declarando uma função

function mostraTexto(){

    //Declarando as variaveis

    var texto = 'Linguagem JavaScript <br>';
    var media = (2+5+8)/3 + '<br>';
    var resposta = true;

    //mostrando a função
    document.getElementById('teste').innerHTML = texto + media + resposta;

}