const pedidos = [
  {
    id: 1,
    cliente: "Mateo Donadio",
    productos: [
      { nombre: "Remera Nike Pro", cantidad: 2, precioUnitario: 2500 },
      { nombre: "Remera Adidas Training", cantidad: 1, precioUnitario: 22800 },
    ],
  },
  {
    id: 2,
    cliente: "Pedro Soda",
    productos: [
      { nombre: "Remera Puma Essentials", cantidad: 1, precioUnitario: 1800 },
      { nombre: "Remera Reebok Speedwick", cantidad: 3, precioUnitario: 2700 },
    ],
  },
  {
    id: 3,
    cliente: "Federico Sorsaburu",
    productos: [
      { nombre: "Remera Under Armour Rush", cantidad: 2, precioUnitario: 3200 },
    ],
  },
];

const buscarFede = pedidos.find(el => el.id === 3)
console.log(buscarFede)

 
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
// Almacenamiento del los arrays de obj..
localStorage.setItem("productos", JSON.stringify(productosIndumentaria));

const arrayProductos = JSON.parse(localStorage.getItem("productos"));
console.log(arrayProductos);


// find: permite buscar y encontrar de acuerdo a la condicion que quiero para la busqueda
// similar a los metodos , retorna la primera coincidencia


// const sumaTotal = productosIndumentaria.reduce(
//   (acc, el) => el.precio * el.cantidad,
//   0
// );
// console.log(sumaTotal);

const card1 = (productosRemera) => {
  const card = document.createElement("div");
  card.className = "card";

  const nombre = document.createElement("h2");
  nombre.innerText = productosRemera.nombre;
  nombre.className = "";

  const precio = document.createElement("p");
  precio.innerText = `$${productosRemera.precio}`;

  const stock = document.createElement("p");
  stock.innerText = ` Stock Disponible: ${productosRemera.cantidad}`;

  const btn = document.createElement("button");
  btn.className = "btn";
  btn.addEventListener("click", () => console.log("agregar al carrito"));
  btn.innerText = `Comprar`;

  card.appendChild(nombre);
  card.appendChild(precio);
  card.appendChild(stock);
  card.appendChild(btn);

  container.appendChild(card);
};

productosIndumentaria.forEach((el) => {
  card1(el);
});

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

// addEventListener: se le pasa como primer parametro en string el nombre del evento
// const botondePrueba = document.getElementById("btn-compra")
// botondePrueba.addEventListener("click", () => console.log("agregar"))

// botondePrueba.onclick = () => alert("gracias por comprar")

// evento al salir de la pagina

let title = document.title

window.addEventListener('blur', () => {

  title = document.title;
  document.title = "No salgas, volve!"
})

window.addEventListener('focus', () =>{
  document.title = title    
})

