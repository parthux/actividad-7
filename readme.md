Listado de ejercicios:

1. Variables y Operadores

Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable. (utilizar concat)
Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) guardando el resultado de la suma en una 3er variable (utilizar length).

//exercise a
let userName = 'Matias';
let userSurname = 'Principe';
let userConcat= userName.concat(" ",userSurname)
console.log (userConcat)

//exercise b

let userEmail = 'principematias23@gmail.com'
let software = 'gmail'
let sum = new Number(userEmail.length + software.length)
console.log (sum)

2. Strings

Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).

//exercise a

let example = 'aborigenes'
let example2 = example.substring (0,5)
console.log(example2)

//exercise b

let word = 'acepciones'
//Primer caracter en mayuscula.
let wordFirstLetter = word.substring(0,1)
    wordFirstLetter = wordFirstLetter.toUpperCase()
//El resto de caracteres en minuscula.
let wordOtherLetters = word.substring(1)
    wordOtherLetters = wordOtherLetters.toLowerCase()
let wordConcat = wordFirstLetter + wordOtherLetters //let wordConcat = wordFirstLetter.concat(wordOtherLetters)
console.log(wordConcat)

//exercise c

let word2 = 'hola mundos'
let wordBlanks = word2.indexOf (' ') //espacio en blanco
console.log(wordBlanks)

3. Arrays

Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11.
Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
Agregar un elemento al principio y al final del array (utilizar unshift y push).
Quitar un elemento del principio y del final del array (utilizar shift y pop).
Invertir el orden del array (utilizar reverse).
Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).

let array = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

//exercise a

console.log(array[5], array[11]);

//exercise b

array.sort((a, b) => {
    a = a.toLowerCase();
    b = b.toLowerCase();
    if (a == b) {
        return 0;
    }
    if (a < b) {
        return -1;
    }
    return 1;
    } ); // array.sort()

console.log (array);

//exercise c

array.unshift('start');//agregar en el inicio un elemento al array.
array.push('end');//agregar en el final un elemento al array.

console.log (array);

//exercise d

 array.shift(); //borrar el primer elemento del array
 array.pop();//borrar el ultimo elemento del array

 console.log (array);

//exercise e

array.sort((a, b) => {
    a = a.toLowerCase();
    b = b.toLowerCase();
    if (a == b) {
        return 0;
    }
    if (a > b) {
        return -1;
    }
    return 1;
    } );// o array.reverse()

console.log (array);

//exercise f

array = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"].join('-'); //agregar un caracter entre elementos.
let wordArray = array.toString(); //convertir en string.
console.log (wordArray);

//exercise j

array = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
let newArray = array.slice(4, 11);
console.log(newArray);

4. If Else

Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5”. [utilizar alert() ]
Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
“Menor” si la edad es menor a 18
“Mayor” si la edad es mayor o igual a 18 Y menor que 65
“Jubilado” si la edad es mayor o igual que 65.

let age = Math.round(Math.random() * 100);
console.log("Número aleatorio entre 0 y 100: " + age);

if (age < 18) {

    console.log ('Menor');

    } else if (age >= 18 && age < 65){

        console.log ('Mayor');

    } else if (age >= 65){

        console.log ('Jubilado');

};

5. For

Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar una alerta utilizando cada una de las palabras.
Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra modificada.
Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición, es decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del array, desde el número 0 hasta al número 9. Mostrar por la consola del navegador el array final (utilizar console.log).

6. Funciones

Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.
A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.
A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).