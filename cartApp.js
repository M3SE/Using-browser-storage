// Initialize the cart in localStorage if it doesn't exist
function initializeCart() {
    if (!localStorage.getItem('cart')) {
        localStorage.setItem('cart', JSON.stringify([]));
    }
}

// Add an item to the cart
function addItem(item) {
    const cart = JSON.parse(localStorage.getItem('cart'));
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Remove an item from the cart by id
function removeItem(itemId) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart = cart.filter(item => item.id !== itemId);
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Display the cart contents in the console
function displayCart() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    console.log(cart);
}

// Event listener for form submission to add an item
document.getElementById('addItemForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const itemName = document.getElementById('itemName').value;
    const itemPrice = parseFloat(document.getElementById('itemPrice').value);
    const item = { id: Date.now(), name: itemName, price: itemPrice };
    addItem(item);
    event.target.reset();  // Clear the form fields
});

// Event listener for the display cart button
document.getElementById('displayCartButton').addEventListener('click', displayCart);

// Initialize the cart when the script loads
initializeCart();

/* Create an HTML file called cart.html with a simple structure that includes a form to add items to the cart and a button to display the cart contents.
Create a file called cartApp.js and link it to cart.html.
In cartApp.js, write a script that does the following:
Create a function called initializeCart that checks if there's a cart in localStorage; if not, it initializes an empty cart and stores it in localStorage.
Create a function called addItem that takes an item object as a parameter, retrieves the cart from localStorage, adds the item to the cart, and then stores the updated cart back into localStorage.
Create a function called removeItem that takes an item id as a parameter, retrieves the cart from localStorage, removes the item with the given id from the cart, and then stores the updated cart back into localStorage.
Create a function called displayCart that retrieves the cart from localStorage and logs the cart contents to the console.
Create event listeners for the add item form and display cart button to call the respective functions. */