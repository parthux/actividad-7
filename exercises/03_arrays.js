"use Strict"; //javascrip moderno On

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

