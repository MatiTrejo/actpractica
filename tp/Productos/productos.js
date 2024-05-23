const productos = [
    {
        id:1,
        nombre: "Camisa de algodón",
        precio: 25.99,
        categoria: "ropa",
        imagen: "C:\Users\matia\OneDrive\Escritorio\Productos\IMG\camisa.jpg",
        descripcion: "Una elegante camisa de algodón"
    },
    {
        id:2,
        nombre: "Zapatos de cuero",
        precio: 59.99,
        categoria: "Calzado",
        imagen: "C:\Users\matia\OneDrive\Escritorio\Productos\IMG\zapatos.jpg",
        descripcion: "Un par de zapatos de cuero"
    },
    {
        id:3,
        nombre: "Bolso de mano",
        precio: 39.99,
        categoria: "Accesorios",
        imagen: "C:\Users\matia\OneDrive\Escritorio\Productos\IMG\bolso.jpg",
        descripcion: "Un bolso de mano elegante y funcional para mujeres"
    }
];

function generarHTMLProductos(productos) {

    let htmlProductos = "";

    productos.forEach(producto => {
        htmlProductos += `
            <div class="producto">
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <h3>${producto.nombre}</h3>
                <p>Categoria: ${producto.categoria}</p>
                <p>Precio: $${producto.precio}</p>
                <p>Descripcion: ${producto.descripcion}</p>
            </div>
        `;
    });

    return htmlProductos;
}


function agregarProductosAlDOM() {

    const contenedorProductos = document.getElementById("productos");

    const htmlProductos = generarHTMLProductos(productos);

    contenedorProductos.innerHTML = htmlProductos;
}

agregarProductosAlDOM();
