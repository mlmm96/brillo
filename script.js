document.addEventListener("DOMContentLoaded", () => {
    const carrito = [];
    const listaCarrito = document.getElementById("lista-carrito");
    const totalElemento = document.getElementById("total");
    const botonesAgregar = document.querySelectorAll(".add-to-cart");
    const botonVaciar = document.getElementById("vaciar-carrito");

    // Función para actualizar el carrito en pantalla
    function actualizarCarrito() {
        listaCarrito.innerHTML = "";
        let total = 0;

        carrito.forEach((producto, index) => {
            let li = document.createElement("li");
            li.innerHTML = `${producto.nombre} - $${producto.precio} 
                <button onclick="eliminarDelCarrito(${index})">❌</button>`;
            listaCarrito.appendChild(li);
            total += producto.precio;
        });

        totalElemento.textContent = total;
    }

    // Agregar producto al carrito
    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", (e) => {
            const nombre = e.target.getAttribute("data-nombre");
            const precio = parseFloat(e.target.getAttribute("data-precio"));
            
            carrito.push({ nombre, precio });
            actualizarCarrito();
        });
    });

    // Eliminar producto del carrito
    window.eliminarDelCarrito = (index) => {
        carrito.splice(index, 1);
        actualizarCarrito();
    };

    // Vaciar carrito
    botonVaciar.addEventListener("click", () => {
        carrito.length = 0;
        actualizarCarrito();
    });
});
