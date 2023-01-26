/*
// Armazenar um valor do qual queremos indentificar como primo ou não é primo
let num = 19
// Armazenar um valor para entender quantas vezes dividimos o valor acima
let div = 0
// Gerar um loop para conferirmos as divisões, OBS: este loop tem que ser apenas um loop;
for(i = 1; i <= num; i++){
// Colocar uma condição do numero primo em que se diferencia dos demais numeros devido sua caracteristica de realizar apenas duas divisões sendo elas por 1 ou pelo mesmo numero.
// e quando essa divisão for verdadeira, adicionamos +1 a divisão.
// se tiver mais de duas divisões realizadas o numero não é primo.
// se tiver apenas duas divisões o numero é primo.

    if(num % i == 0){
        div++;
    }
}
//Se num tiver mais que duas divisões ele é primo
if(div === 2){
    console.log(`${num} é um numero primo`)
}
//Se ele tiver mais que duas divisões ele não é primo
else{
    console.log(`${num} não é um numero primo`)
}*/

//pratica

let num = 1
let div = 0

for(i = 1; i <= num; i++){
    if(num % i == 0){
        div++;
    }
}

if(div == 2){
    console.log(`o numero ${num} é primo`)
}else{
    console.log(`o numero ${num} não é primo`) 
}
