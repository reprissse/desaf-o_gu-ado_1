/*EJERCICIO NÚMERO 2
Realizar operaciones con dos números. Pedir al usuario que ingrese dos números 
diferentes y mayores a cero. Para ambos números, calcular lo siguiente: (1.5 Puntos)

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
FINALIZA EJERCICIO NÚMERO 2*/

/*EJERCICIO NÚMERO 3
Recrear un programa que pida al usuario ingresar la temperatura en grados Celsius y que la transforme a grados Kelvin y Fahrenheit. (2 Puntos) 
Se debe considerar la siguiente información respecto a la equivalencia de las escalas de temperatura:  
● 0 Grados Celsius corresponden a 273,15 Kelvin. La fórmula para convertirlos es 0 °C + 273.15 = 273.15 K 
● 0 Grados Celsius corresponden a 32 Fahrenheit. La fórmula para convertirlos es (0 °C × 9/5) + 32 = 32 °F*/

let celsius = +prompt('ingresa los grados Celsius')
let kelvin = (celsius + 273.15)
let fahrenheit = (celsius * (9/5)) + 32
document.write(`${celsius} grados Celcius, equivale a ${kelvin} grados Kelvin y a ${fahrenheit} grados Fahrenheit`)





