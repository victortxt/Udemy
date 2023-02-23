function soma(){
    let res = 0
    for(let x in arguments){
        res += arguments[x]
    }
    return res
}

console.log(soma(12, 42, 78, 10))
