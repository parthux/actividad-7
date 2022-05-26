"use Strict";

//exercise a
let numberRandom = Math.random();

if(numberRandom >= 0.5){

    alert(numberRandom + ' ' + 'Greater than 0,5');

    } else{

        alert(numberRandom + ' ' + 'Lower than 0,5');

    };

//exercise b

let age = Math.round(Math.random() * 100);
console.log("Número aleatorio entre 0 y 100: " + age);

if (age < 18) {

    console.log ('Menor');

    } else if (age >= 18 && age < 65){

        console.log ('Mayor');

    } else if (age >= 65){

        console.log ('Jubilado');

};
