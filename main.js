const $nombreProducto = document.querySelector('#nombreProducto')
const $precioProducto = document.querySelector('#precioProducto')
const $stockProducto = document.querySelector('#stockProducto')
const $botonAgregar = document.querySelector('#agregarProducto')
const $contenedorStock = document.querySelector('.stock')
const $modal = document.getElementById('ventanaModal');
const $closeModal = document.getElementById('cerrarModal');



const Compras = function compras(nombre, precio, stock) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
}
let producto1 = new Compras('guitarra', 200000, 14)
let producto2 = new Compras('piano', 183000, 2)
let producto3 = new Compras('violin', 59000, 4)
let producto4 = new Compras('bateria', 262000, 8)
let producto5 = new Compras('flauta', 9000, 10)
let producto6 = new Compras('tambor', 8000, 9)

let lista = [producto1, producto2, producto3, producto4, producto5, producto6]

let carrito = []

function card() {
    $contenedorStock.innerHTML = "";
    lista.forEach(producto => {
        let cardProducto = document.createElement('DIV')
        cardProducto.classList.add('contenedorStock')
        cardProducto.innerHTML = `
        <p class="nombreProductoStock">NOMBRE DEL PRODUCTO: <span class="span"> ${producto.nombre} </span></p>
        <p class="precioProductoStock">PRECIO DEL PRODUCTO: <span class="span"> $${producto.precio} </span></p>
        <p class="stockDisponible">STOCK DEL PRODUCTO: <span class="span"> ${producto.stock} </span></p>`
        $contenedorStock.append(cardProducto)
    });
}
card()

productoAgregado()
function productoAgregado() {


    datosProductos()

    let nombreProducto = "";
    let precioProducto = "";
    let stockProducto = "";


    function datosProductos() {

        $nombreProducto.addEventListener('keyup', (e) => {
            nombreProducto = e.target.value
        })

        $precioProducto.addEventListener('keyup', (e) => {
            precioProducto = e.target.value
        })

        $stockProducto.addEventListener('keyup', (e) => {
            stockProducto = e.target.value
        })

    }

    $botonAgregar.addEventListener('click', () => {
        console.log(nombreProducto, precioProducto, stockProducto);
        let producto = {
            nombre: nombreProducto,
            precio: precioProducto,
            stock: stockProducto
        }
        lista.unshift(producto)
        card()
        $nombreProducto.value = '';
        $precioProducto.value = '';
        $stockProducto.value = '';
        $modal.style.display = 'block';
    })

    $closeModal.addEventListener('click', () => {
        $modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === $modal) {
            $modal.style.display = 'none';
        }
    });


    // const nombreProducto = 

    // const productoExistente = lista.find(producto => producto.nombre.toLowerCase() === nombreProducto)
    // if (productoExistente) {
    //     alert(`${nombreProducto} ya se encuentra en el stock.`)
    //     return null;
    // }
    //     const precioProducto = parseInt(prompt('ingrese el precio de su producto'))
    //     const stockProducto = parseInt(prompt('ingrese el stock de su producto agregado'))

    // if (nombreProducto !== null && !isNaN(precioProducto) && !isNaN(stockProducto)) {
    //     pregunta();
    //     return { nombre: nombreProducto, precio: precioProducto, stock: stockProducto };
    // }
    // else {
    //     alert('Datos inválidos. El producto no se agregó al stock.');
    //     return null;
    // }
}

// carrito.push(productoAgregado())

// function pregunta() {
//     const respuesta = confirm("¿Desea agregar otro producto?")
//     if (respuesta) {
//         const producto = productoAgregado()
//         if (producto != null) {

//             carrito.push(producto)
//         }

//     } else {
//         alert('No desea agregar mas productos, gracias!')
//         const masProductos = confirm('Quieres saber si hay stock de algun producto?')
//         if (masProductos) {
//             demasProductos()
//         } else {
//             alert('Vuelva pronto!')
//         }
//     }
// }

// function demasProductos() {
//     const palabra = prompt('Busca algun producto de la lista')
//     const filtrado = lista.filter(producto => {
//         return producto.nombre.toLowerCase().includes(palabra.toLowerCase())
//     })

//     if (filtrado.length > 0) {
//         filtrado.forEach(producto => {
//             alert(`si tenemos stock. Precio: $${producto.precio}, Stock: ${producto.stock}`)
//         })
//     } else {
//         alert(`no se encontraron productos con la palabra '${palabra}'`)
//     }
// }
// concatenando()

// function concatenando() {
//     carritoFinal = carrito.concat(lista)
//     carritoFinal.forEach(element => {
//         console.log(element.nombre)
//     });
// }