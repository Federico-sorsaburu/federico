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

// const usuarioCorrecto = "fede123";
// const passwordCorrecto = "clave123";
// let intentos = 0;
// const maxIntentos = 3;

// function loginUsuario() {
//     for (let i = intentos; i < maxIntentos; i++) {
//         let user = prompt("Ingrese su usuario:");
//         let password = prompt("Ingrese su contraseña:");

//         if (user === usuarioCorrecto && password === passwordCorrecto) {

//             console.log("Login exitoso Bienvenido, " + user);
//             intentos = 0;
//             break;
//         } else {
//             intentos++;
//             alert(` Usuario o contraseña incorrectos. Intento ${intentos} de ${maxIntentos}`);
//             console.log(`Usuario o contraseña incorrectos. Intento ${intentos} de ${maxIntentos}`);

//             if (intentos >= maxIntentos) {
//                 alert(" Cuenta bloqueada. Demasiados intentos fallidos.");

//                 break;
//             }
//         }
//     }
// }

// loginUsuario();

//     for(let i = 0; i <= 3; i++){
//         const usuario = prompt("ingresar usuario")
//         const password = parseInt(prompt("Ingresar contraseña"))

//         if(usuario === "usuario" && password === "clave2025"){
//            alert ("bienvenido Usuario")
//             break

//         }else{
//             alert("credencial incorrecta")
//             const aviso = incrementoBloqueo(i)
//             alert(aviso)
//         }
//     }
// // Funcion de bloqueo =>
//    function incrementoBloqueo(i){
//     if(i === 2){
//         return ("Alcanzaste el maximo de intentos, recuperar contraseña")
//     }else{
//         if( i=== 0){
//             return "Te queda 2 intentos mas"
//         }else{
//             return "Te queda 1 intento"
//         }
//     }
//    }

const productosIndumentaria = [
  {
    nombre: "Remera Nike Pro",
    marca: "Nike",
    tipo: "Deportiva",
    precio: 2500,
    color: "Negra",
    tallas: ["S", "M", "L"],
    cantidad: 11,
  },
  {
    nombre: "Remera Adidas Training",
    marca: "Adidas",
    tipo: "Deportiva",
    precio: 22800,
    color: "Azul",
    tallas: ["M", "L", "XL"],
    cantidad: 32,
  },
  {
    nombre: "Remera Puma Essentials",
    marca: "Puma",
    tipo: "Casual",
    precio: 1800,
    color: "Gris",
    tallas: ["S", "M", "L"],
    cantidad: 12,
  },
  {
    nombre: "Remera Under Armour Rush",
    marca: "puma",
    tipo: "Deportiva",
    precio: 3200,
    color: "Roja",
    tallas: ["S", "M", "L", "XL"],
    cantidad: 22,
  },
  {
    nombre: "Remera Reebok Speedwick",
    marca: "Reebok",
    tipo: "Deportiva",
    precio: 2700,
    color: "Verde",
    tallas: ["M", "L", "XL"],
    cantidad: 14,
  },
  {
    nombre: "Remera Reebok Speedwick",
    marca: "Reebok",
    tipo: "Deportiva",
    precio: 2700,
    color: "Verde",
    tallas: ["M", "L", "XL"],
    cantidad: 7,
  },
  {
    nombre: "Remera Reebok Speedwick",
    marca: "Reebok",
    tipo: "Deportiva",
    precio: 2700,
    color: "Verde",
    tallas: ["M", "L", "XL"],
    cantidad: 2,
  },
  {
    nombre: "Remera Reebok Speedwick",
    marca: "Reebok",
    tipo: "Deportiva",
    precio: 2700,
    color: "Verde",
    tallas: ["M", "L", "XL"],
    cantidad: 4,
  },
  {
    nombre: "Remera Reebok Speedwick",
    marca: "Reebok",
    tipo: "Deportiva",
    precio: 2700,
    color: "Verde",
    tallas: ["M", "L", "XL"],
    cantidad: 7,
  },
  {
    nombre: "Remera Reebok Speedwick",
    marca: "Reebok",
    tipo: "Deportiva",
    precio: 2700,
    color: "Verde",
    tallas: ["M", "L", "XL"],
    cantidad: 10,
  },
  {
    nombre: "Remera Reebok Speedwick",
    marca: "Reebok",
    tipo: "Deportiva",
    precio: 2700,
    color: "Verde",
    tallas: ["M", "L", "XL"],
    cantidad: 8,
  },
  {
    nombre: "Remera Reebok Speedwick",
    marca: "Reebok",
    tipo: "Deportiva",
    precio: 2700,
    color: "Verde",
    tallas: ["M", "L", "XL"],
    cantidad: 2,
  },
  {
    nombre: "Remera Reebok Speedwick",
    marca: "Reebok",
    tipo: "Deportiva",
    precio: 2700,
    color: "Verde",
    tallas: ["M", "L", "XL"],
    cantidad: 12,
  },
  {
    nombre: "Remera Reebok Speedwick",
    marca: "Reebok",
    tipo: "Deportiva",
    precio: 2700,
    color: "Verde",
    tallas: ["M", "L", "XL"],
    cantidad: 13,
  },
  {
    nombre: "Remera Reebok Speedwick",
    marca: "Reebok",
    tipo: "Deportiva",
    precio: 2700,
    color: "Verde",
    oferta: true,
    tallas: ["M", "L", "XL"],
    cantidad: 13,
  },
  {
    nombre: "Remera Reebok Speedwick",
    marca: "Reebok",
    tipo: "Deportiva",
    precio: 2700,
    color: "Verde",
    tallas: ["M", "L", "XL"],
    cantidad: 21,
  },
];

localStorage.setItem("productos", JSON.stringify(productosIndumentaria));

const arrayProductos = JSON.parse(localStorage.getItem("productos"));
console.log(arrayProductos);

const sumaTotal = productosIndumentaria.reduce(
  (acc, el) => el.precio * el.cantidad,
  0
);
console.log(sumaTotal);

class UsuarioNuevo {
  constructor(nombre, apellido, correo, telefono) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.correo = correo;
    this.telefono = telefono;
  }
}

const registronuevo = new UsuarioNuevo(
  "federico",
  "sorsaburu",
  "sorsa@gmail.com",
  "telefono"
);

const numeros = [1, 2, 3, 4];

numeros.forEach((num) => console.log(num));
const indumentariaPantalon = [
  {
    nombre: "Pantalón Nike Dri-FIT",
    marca: "Nike",
    tipo: "Deportivo",
    precio: 12500,
    color: "Negro",
    tallas: ["S", "M", "L", "XL"],
    cantidad: 3,
  },
  {
    nombre: "Pantalón Adidas Tiro 21",
    marca: "Adidas",
    tipo: "Deportivo",
    precio: 11000,
    color: "Azul",
    tallas: ["M", "L", "XL"],
    cantidad: 5,
  },
  {
    nombre: "Pantalón Puma Training",
    marca: "Puma",
    tipo: "Deportivo",
    precio: 9500,
    color: "Gris",
    tallas: ["S", "M", "L"],
    cantidad: 4,
  },
  {
    nombre: "Pantalón Under Armour Challenger",
    marca: "Under Armour",
    tipo: "Deportivo",
    precio: 13000,
    color: "Rojo",
    tallas: ["M", "L", "XL"],
    cantidad: 2,
  },
  {
    nombre: "Pantalón Reebok Workout Ready",
    marca: "Reebok",
    tipo: "Deportivo",
    precio: 10800,
    color: "Verde",
    tallas: ["S", "M", "L", "XL"],
    cantidad: 3,
  },
  {
    nombre: "Pantalón Fila Performance",
    marca: "Fila",
    tipo: "Deportivo",
    precio: 8700,
    color: "Negro",
    tallas: ["M", "L"],
    cantidad: 2,
  },
  {
    nombre: "Pantalón Topper Sport",
    marca: "Topper",
    tipo: "Deportivo",
    precio: 7900,
    color: "Gris",
    tallas: ["S", "M", "L"],
    cantidad: 3,
  },
  {
    nombre: "Pantalón Lotto Active",
    marca: "Lotto",
    tipo: "Deportivo",
    precio: 7200,
    color: "Azul",
    tallas: ["M", "L", "XL"],
    cantidad: 4,
  },
];


// const titulo = document.getElementById("titulo")
// titulo.innerText ="Bienvenidos a nuestra tienda Onlinne"
// titulo.className +=  " titulo-verde"
// console.log(titulo)


// 



 
 

 

 
const card1 = (productosRemera) =>{
  const card = document.createElement("div")
  card.className = "card"

  const nombre = document.createElement("h2")
  nombre.innerText = productosRemera.nombre;
  nombre.className = ""

  const precio = document.createElement("p")
  precio.innerText = `$${productosRemera.precio}`

  const stock = document.createElement("p")
  stock.innerText =  ` Stock Disponible: ${productosRemera.cantidad}`

  const btn = document.createElement("button")
  btn.className = "btn"
  btn.addEventListener("click", () => console.log("agregar al carrito"))
  btn.innerText = `Comprar`

  card.appendChild(nombre)
  card.appendChild(precio)
  card.appendChild(stock)
  card.appendChild(btn)

  container.appendChild(card)

}

productosIndumentaria.forEach(el => {
 card1(el)
})

// addEventListener: se le pasa como primer parametro en string el nombre del evento
// const botondePrueba = document.getElementById("btn-compra")
// botondePrueba.addEventListener("click", () => console.log("agregar"))

// botondePrueba.onclick = () => alert("gracias por comprar")





 