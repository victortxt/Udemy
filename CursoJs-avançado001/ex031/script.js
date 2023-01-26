// escrever uma função que recebe uma string
function string(s){
    if(s.length >= 10){
        console.log(`${s}, este texto não está dentro do limite`)
    }else{
        console.log(`${s} está dentro do limite`)
    }
}
console.log(string("Bom dia João, Tudo bem"))
console.log(string("Bom dia"))