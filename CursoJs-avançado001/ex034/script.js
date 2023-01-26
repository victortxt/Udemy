function calc(x, y, z){
    return x * y * z
}

console.log(calc(4,4,4))

const calculo = console.log(calc(5, 5, 5))

function dirigir(idade, cnh){
    if(idade >= 18 && cnh == true){
        console.log(`Você pode dirigir`)
    }else{
        console.log(`Você pode não dirigir`)

    }
}

console.log(dirigir(18, true))
console.log(dirigir(16, false))
console.log(dirigir(24, false))
console.log(dirigir(16, true))