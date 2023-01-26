function Dirigir(age, cnh){
    if(age >= 18 && cnh == true){
        console.log("voce pode dirigir")
    }else{
        console.log("voce não pode dirigir")
    }
}

console.log(Dirigir(17, false))// false
console.log(Dirigir(18, 0))//false
console.log(Dirigir(19, 1))//true
console.log(Dirigir(19, 0))// false






