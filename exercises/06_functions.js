"use Strict"; //javascrip moderno On

//exercise a
function sum (a , b){
    return a + b;
}

var result = null;

result = sum (10, 5);

console.log('Resultado: ', result);

//exercise b

function sum (a , b){
    if (isNaN(a) || isNaN(b)){
        return alert('NaN');
    }else{
        return a + b;
    }
}

var result = null;

result = sum (10 , 'po');

console.log('Resultado: ', result);

//exercise c

function sum (a , b){
    if (isNaN(a) || isNaN(b)){
        return alert('NaN');
    }else if(Number.isInteger(a / b)){
        return a + b;
    }else{
        return alert('Los numero ingresador no son enteros'), Math.round(a + b);
    }
}

var result = null;

result = sum (10 , 5);

console.log('Resultado: ', result);