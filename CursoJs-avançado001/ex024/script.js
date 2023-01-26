function idade(num){
    if(num < 18){
        console.log(`você tem ${num}anos de idade, então você pode dirigir`)
    }else if(num >= 18){
        console.log(`Você tem ${num}anos de idade, então você pode dirigir`)
    }
}

console.log(idade(67))
console.log(idade(17))
console.log(idade(18))
