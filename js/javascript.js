document.addEventListener("DOMContentLoaded", function () 
{   
    console.log("DOM fully loaded and parsed!");

    //codigo para desplegar el menu
    var floatingButton = document.getElementById("shop-list");
    floatingButton.addEventListener("click", function () 
    {
        menu.classList.toggle("hidden");
    });


    var menu = document.getElementById("menu-cart"); //obtenemos el menu
    const cartTotalPrice = document.getElementById('cart-total-price');//obtenemos el precio total

    window.clearCart = function() { // Función para limpiar el carrito
        cart = []; // Vacía el array del carrito
        showCart(); // Actualiza la visualización del carrito
    };

    // Obtener los productos del archivo JSON
    const products = [
        {
            "id": 1,
            "Name": "Super Dogo",
            "Price": 14000
        },
        {
            "id": 2,
            "Name": "Pulled Pork",
            "Price": 14000
        },
        {
            "id": 3,
            "Name": "Aleman",
            "Price": 12000
        },
        {
            "id": 4,
            "Name": "Pizza",
            "Price": 12000
        },
        {
            "id": 5,
            "Name": "Ranchero",
            "Price": 12000
        },
        {
            "id": 6,
            "Name": "Mexicano",
            "Price": 12000
        },
        {
            "id": 7,
            "Name": "Bacon Cheese",
            "Price": 12000
        },
        {
            "id": 8,
            "Name": "Doble Carne",
            "Price": 15000
        },
        {
            "id": 9,
            "Name": "Pulled Pork",
            "Price": 16000
        },
        {
            "id": 10,
            "Name": "Premium Burger",
            "Price": 20000
        },
        {
            "id": 11,
            "Name": "Bottle Of Water",
            "Price": 2000
        },
        {
            "id": 12,
            "Name": "Soda Pop",
            "Price": 3000
        },
        {
            "id": 13,
            "Name": "Té",
            "Price": 3000
        },
        {
            "id": 14,
            "Name": "Juice Hit",
            "Price": 3000
        }
    ];

    let cart = []; // Array para guardar los productos del carrito


    window.addToCart = function(productId)  // Función para agregar productos al carrito
    {
        const selectedProduct = products.find(product => product.id === productId); // Buscar el producto por ID

        const existsInCart = cart.find(item => item.id === productId); // Buscar el producto en el carrito

        if (existsInCart) { // Si el producto ya está en el carrito, incrementar la cantidad
            existsInCart.quantity++; // Incrementar la cantidad
        } else { // Si el producto no está en el carrito, agregarlo con cantidad 1
            cart.push({ // Agregar el producto al carrito
                id: selectedProduct.id, // Usamos el ID del producto
                Name: selectedProduct.Name, // Nombre del producto
                Price: selectedProduct.Price, // Precio del producto
                quantity: 1 // Cantidad inicial: 1
            }); // Agregamos el producto al carrito
        }

        showCart(); // Actualizar la visualización del carrito
    };

       window.removeFromCart = function(productId) // Función para eliminar productos del carrito
       { 
            const cartItem = cart.find(item => item.id === productId); // Buscar el producto en el carrito
            if (cartItem) { // Si el producto está en el carrito
                if (cartItem.quantity > 1) { // Si la cantidad es mayor a 1, decrementar la cantidad
                    cartItem.quantity--; // Decrementar la cantidad
                } else {
                    cart = cart.filter(item => item.id !== productId); // Eliminar el producto del carrito
                }
                showCart(); // Actualizar la visualización del carrito
            }
        }
    function showCart()  // Función para mostrar los productos en el carrito
    { 
        const cartContainer = document.getElementById('list-items'); // Obtener el contenedor del carrito
        const cartTotal = document.getElementById('cart-total'); // Obtener el contenedor del total de productos        
        const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0); // Obtener el número total de productos
        cartTotal.textContent = totalItems > 0 ? ` ${totalItems}` : ''; // Actualizar el número total de productos
        cartContainer.innerHTML = ''; // Limpiar el HTML del contenedor del carrito
        let totalPrice = 0; // Agregamos una variable para el precio total
        cart.forEach(item => { // Recorremos el array del carrito
            const itemHTML = `
                <li>${item.Name} -   Quantity: ${item.quantity}
                    - Total Price: $${(item.Price * item.quantity).toFixed(2)}
                    <button class="remove-button" onclick="removeFromCart(${item.id})">Remove</button>
                </li>
            `; // HTML del producto en el carrito
            cartContainer.innerHTML += itemHTML; // Agregamos el HTML del producto al contenedor del carrito

            totalPrice += item.Price * item.quantity; // Actualizamos el precio total

        });
        cartTotalPrice.textContent = totalItems > 0 ? `Total: $${totalPrice.toFixed(2)}` : ''; // Actualizamos el precio total
    }
});//fin del DOMContentLoaded