var vel = 130;
var max = 80;
if(vel > max){
    console.log(`A sua velocidade está acima dos ${max}km/h / A sua velocidade excede ${vel - max}km/h do limite, MULTADO!`);
}else if(vel <= max){
    console.log(`A sua velocidade esta dentro do limite de ${max}km/h. continue assim.`)
}