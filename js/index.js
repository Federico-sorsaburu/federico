//  let numero1 = parseInt(prompt("ingresar numero"))
//  let numero2 = parseInt(prompt("ingresar numero"))

//  if(numero1 > numero2){
//     console.log("el numero 1 es mayor que al 2")
//  }else if(numero2 < numero1){
//     console.log("numero 2 es mayor que el numero1")
//  }else if(numero1 <= numero1){
//     console.log("Son iguales ")
//  }else{
//     console.log("no hay nada que imprimir")
//  }


// let numero = parseInt(prompt("ingresa numero"))

// if(numero % 2 === 0){
//     console.log("es divisible por 2")
// }else{
//     console.log("es impar, no se puede realizar ")
// }

// let numero1 = parseInt(prompt("Ingresa el primer número:"));
// let numero2 = parseInt(prompt("Ingresa el segundo número:"));
// let operacion = prompt("¿Qué deseas hacer? (suma, resta, multiplicar, division)");

// if (operacion === "suma") {
//     console.log("El resultado de la suma es:", numero1 + numero2);
// } else if (operacion === "resta") {
//     console.log("El resultado de la resta es:", numero1 - numero2);
// } else if (operacion === "multiplicar") {
//     console.log("El resultado de la multiplicación es:", numero1 * numero2);
// } else if (operacion === "division") {
//     if (numero2 !== 0) {  // Verificamos que no se divida por cero
//         console.log("El resultado de la división es:", numero1 / numero2);
//     } else {
//         console.log("Error: No se puede dividir por cero.");
//     }
// } else {
//     console.log("Operación no válida. Por favor, elige suma, resta, multiplicar o división.");
// }

// let suma = 0; // Aquí guardaremos la suma

// Escribe un bucle que sume los números del 1 al 5
// for (let i = 0; i <= 5; i++) {
//    suma += i
//    console.log(i)
// }

// console.log("La suma total es:", suma);

// for (let i = 1; i <= 10; i++){
//     console.log(i)
// }
// for (let i = 10; i >= 1; i--){
//     console.log(i)
// }


// let inicio = parseInt(prompt("Ingresa el número inicial:"));
// let fin = parseInt(prompt("Ingresa el número final:"));

// for (let i = inicio; i <= fin; i++) {
//     if (i % 2 === 0) { // Verificamos si es par
//         console.log(i, "es par");
//     } else { // Si no es par, es impar
//         console.log(i, "es impar");
//     }
// }
 

// let stockTop = 50
// let topPedidos = parseInt(prompt("¿Cuantos tops queres comprar?"))

// if(topPedidos > stockTop){
//     console.log("No hay suficientes Top ")
// }else if (topPedidos < stockTop){
//     console.log("stock disponible para ventas")
// }
 
    // let operador = prompt("ingresar: suma - resta - multiplicar - dividir").toLowerCase()
    // let numero1 = parseInt(prompt("Ingresar un numero"))
    // let numero2 = parseInt(prompt("Ingresar un numero"))

    // if(operador === "suma"){
    //     console.log("el resultado es:", (numero1 + numero2))
    // }else if(operador === "resta"){
    //     console.log("el resultado es:", (numero1 - numero2))
    // }else if(operador === "multiplicar"){
    //     console.log("el resultado es:", (numero1 * numero2))
    // }else if (operador === "dividir"){
    //     console.log("el resultado es:", (numero1 / numero2))
    // }

 
    const usuarioCorrecto = "fede123";
    const passwordCorrecto = "clave123";
    let intentos = 0;
    const maxIntentos = 3;
    
    function loginUsuario() {
        for (let i = intentos; i < maxIntentos; i++) {
            let user = prompt("Ingrese su usuario:");
            let password = prompt("Ingrese su contraseña:");
    
            if (user === usuarioCorrecto && password === passwordCorrecto) {
                 
                console.log("Login exitoso Bienvenido, " + user);
                intentos = 0; 
                break; 
            } else {
                intentos++;
                alert(` Usuario o contraseña incorrectos. Intento ${intentos} de ${maxIntentos}`);
                console.log(`Usuario o contraseña incorrectos. Intento ${intentos} de ${maxIntentos}`);
    
                if (intentos >= maxIntentos) {
                    alert(" Cuenta bloqueada. Demasiados intentos fallidos.");
                   
                    break;  
                }
            }
        }
    }
    
      
    loginUsuario();