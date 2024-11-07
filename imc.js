let peso = parseFloat(prompt ("informe o peso: "));
console.log(peso)
let altura = parseFloat(prompt ("informe a altura: "));
console.log(altura)
let imc = (peso/(altura*altura)).toFixed(2);

console.log(imc)
document.write("o imc é igual a: ", imc)

if(imc >=18.5 && imc <=24.9){
document.write("<br>")
document.write(" o peso está normal!")

} else if ((imc >=25 && imc <= 29.9)){
    document.write("<br>")
    document.write("você está com sobrepeso!")
} else if  ((imc >=30 && imc <-34.9)){
    document.write("<br>")
    document.write("você está com obesidade grau 1")
} else {
    document.write("<br>")
    document.write("você está abaixo do peso ou com obesidade 2")
}