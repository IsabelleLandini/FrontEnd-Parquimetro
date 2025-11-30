//Criar uma aplicação interativa que simule um parquímetro utilizando Programação Orientada a Objetos (POO)
//O usuário informará um valor, e a aplicação calculará o tempo de permanência e o troco (se houver)

//class Parquimetro 
class Parquimetro {
    calcularTempo(valorPago) {
    if (valorPago< 1){
        return 0; //valor insuficiente
    } else if(valorPago <= 1.75){
        return 30;
    } else if (valorPago <=3) {
        return 60;
    } else {
        return 120
    }
}
    
    //calcular valorDevido
    calcularValorDevido(valorPago) {
        if (valorPago < 1) return 0;
        if (valorPago <= 1.75) return 1;
        if (valorPago <= 3) return 1.75;
        return 3
    }

    //calcular troco
    calcularTroco(valorPago) {
        const valorDevido = this.calcularValorDevido(valorPago)
        return valorPago >= 1 ? (valorPago - valorDevido) : 0;
    }
}

//criar instancia do parquimetro após a classe
const meuParquimetro = new Parquimetro(); 

//elementos DOM
const inputValor= document.getElementById('valorPago');
const botaoPagar= document.getElementById('botaoPagar');
const resultadoDiv= document.getElementById('resultado');




//evento do botão
botaoPagar.addEventListener('click', function(){
    const valorInserido = parseFloat(inputValor.value);
    if (isNaN(valorInserido)){
        resultadoDiv.innerHtML = "Por favor, insira um valor válido."//verifica se o valor inserido é um numero valido
        return;
    }
    const tempo = meuParquimetro.calcularTempo (valorInserido);
    const troco = meuParquimetro.calcularTroco(valorInserido);
       
    if (tempo === 0) {
        resultadoDiv.innerHTML = "Valor insuficiente para estacionar.";
    } else {
    resultadoDiv.innerHTML= 
    `Tempo: ${tempo} minutos. Troco: R$ ${troco.toFixed(2)}`
    }
});




