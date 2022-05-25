"use Strict"; //javascrip moderno On

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
