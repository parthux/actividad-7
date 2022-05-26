'use strict';

let array = ['pelota','rosca','mono','mando','raton'];

//exercise a
for (let cont = 0; cont < array.length; cont++){
    alert(array[cont]);
}
//exercise b

let wordFirstLetter= null;
let wordOtherLetters= null;

for (let cont = 0; cont < array.length; cont++){

   wordFirstLetter = array[cont].substring(0 , 1);
   wordFirstLetter = wordFirstLetter.toUpperCase();
   wordOtherLetters = array[cont].substring(1);
   wordOtherLetters = wordOtherLetters.toLowerCase();
   array[cont]= wordFirstLetter + wordOtherLetters;
   alert(array[cont]);
}
//exercise c

let arrayempty= new Array();

for (let cont = 0; cont < 10; cont++){

    arrayempty[cont] = cont;

}
console.log(arrayempty);