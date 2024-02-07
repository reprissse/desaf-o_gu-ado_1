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
● 0 Grados Celsius corresponden a 32 Fahrenheit. La fórmula para convertirlos es (0 °C × 9/5) + 32 = 32 °F

//se define el prompt al usuario/
let celsius = +prompt('ingresa los grados Celsius')
//se definen las formulas/
let kelvin = (celsius + 273.15)
let fahrenheit = (celsius * (9/5)) + 32
//se define el texto para el resultado/
document.write(`${celsius} grados Celcius, equivale a ${kelvin} grados Kelvin y a ${fahrenheit} grados Fahrenheit`)
FINALIZA EJERCICIO NÚMERO 3*/

/*EJERCICIO NÚMERO 4
Crear un programa que pida al usuario una cantidad de días y que muestre su 
equivalente en Años, Semanas y Días. Por ejemplo, si el usuario ingresa 373, el 
resultado debe ser 1 año, 1 semana y 1 día. (3 Puntos) 
Se debe considerar lo siguiente:  
● 1 año tiene 365 días 
● 1 semana tiene 7 días 
Se recomienda usar la función Math.floor para obtener la parte entera de un número 
decimal.

//se definen las constantes/
const año = 365
const semanas = 7
//se genera el prompt al usuario/
let dias = +prompt('ingresa la cantidad de días')
//se definen las formulas/
let añoRedondeado = Math.floor(dias/año)
let semanaRedondeado = (añoRedondeado % dias)
let diasrestantes = dias - (añoRedondeado * año) - (semanaRedondeado * semanas)
//se genera el texto a visualizar/
document.write(`${dias} son ${añoRedondeado} año, ${semanaRedondeado} semanas y ${diasrestantes} días`)
FINALIZA EJERCICIO NÚMERO 4*/


/*EJERCICIO NÚMERO 5
Crear un programa que solicite al usuario 5 números y realice los cálculos que se piden 
a continuación. (2 Puntos) 
● La suma de todos los números. 
● El promedio de los 5 números ingresados. */

//se solicitan los 5 numeros al usuario/
let number1 = +prompt('ingresa un numero')
let number2 = +prompt('ingresa un numero')
let number3 = +prompt('ingresa un numero')
let number4 = +prompt('ingresa un numero')
let number5 = +prompt('ingresa un numero')

// se define la formula para sumar los 5 numeros/
let suma = (number1 + number2 + number3 + number4 + number5)
// se define la formula para promediar los 5 numeros/
let promedio = (suma / 5)
// se define el texto que visualiza el usuario con ambos resultado
document.write(`la suma total de los 5 numeros ingresados es ${suma} y el promedio los 5 numeros ingresados es ${promedio}`)


