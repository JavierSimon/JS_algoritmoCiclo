alert(`Se imprimiran por consola los numeros del 1 al 100, teniendo en cuenta los siguientes criterios \n 1) Si el número es múltiplo del numero 1 que se le pide al usuario, deberá imprimir "Fizz" en vez del número. \n 2) Si es múltiplo del número 2 que se le pide al usuario, deberá imprimir "Buzz". \n 3) Si es múltiplo del numero 1 y del numero 2 (a la misma vez), deberá imprimir "FizzBuzz".`)

let n1 = Number(prompt("Agregar primer número entre el 1 y el 100"));
let n2 = Number(prompt("Agregar segundo número entre el 1 y el 100"));

let limite = 100;

for(let i=1; i<=limite; i++) {
    
    if (!(i%n1) && !(i%n2)) {
        console.log(`FizzBuzz ${i}`);
    } 
    else if (!(i%n1)) {
        console.log(`Fizz ${i}`);
    }
    else if (!(i%n2)) {
        console.log(`Buzz ${i}`);
    } 
    else {
        console.log(i);
    }
}






 

  


