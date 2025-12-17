console.log("JS collegato");

//Per ogni numero da 1 a 100
//Stampare i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    
//Controllare se il numero e' multiplo di 3 e di 5 (se "i" diviso 3 ha resto 0 e se "i" diviso 5 ha resto 0)
const isMultipleOf3 = i % 3 === 0;
const isMultipleOf5 = i % 5 === 0;

//Se il numero e' multiplo di 3 e di 5 stampare "FizzBuzz"
if (isMultipleOf3 && isMultipleOf5) {
    console.log("FizzBuzz");
}
//Se e' multiplo di 3 stampa "Fizz"
else if (isMultipleOf3) {
    console.log("Fizz");
}
//Se e' multiplo di 5 stampa "Buzz"
else if (isMultipleOf5) {
    console.log("Buzz");
}
//Altrimenti stampare i numeri normali
else {
    console.log(i)
}
}