/*Realizar operaciones con dos números. Pedir al usuario que ingrese dos números 
diferentes y mayores a cero. Para ambos números, calcular lo siguiente: (1.5 Puntos) */

//se crean los prompt para el usuario//
let number1 = +prompt('ingresa un numero mayor a 0')
let number2 = +prompt('ingresa un segundo numero mayor a 0')
// se crean las 5 variables con sus respectivas formulas//
let suma = (number1 + number2)
let resta = (number1 - number2)
let division = (number1/number2)
let multiplicacion = (number1*number2)
let modulo = (number1 % number2)
//se muestra el resultado en el index//
document.write(`la suma es ${suma}`+'</br>')
document.write(`la resta es ${resta}`+'</br>')
document.write(`la división es ${division}`+'</br>')
document.write(`la multiplicación es ${multiplicacion}`+'</br>')
document.write(`el módulo es ${modulo}`+'</br>')

