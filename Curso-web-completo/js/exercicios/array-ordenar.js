let ordenacaoNumeros = Array(1, 2, 42, 78, 142, 90, 23);
console.log(ordenacaoNumeros.sort(logicaOrdenacao))
function logicaOrdenacao(a, b){
    return a - b;
}
