//loadcookie
const cookieValue = document.cookie
.split('; ')
.find(row => row.startsWith('orderquantity='))
?.split('=')[1];

const orderQuantity = parseInt(cookieValue);

const orderQuantitySpan = document.getElementById('order-quantity');
orderQuantitySpan.textContent = orderQuantity;

// Check if the integer value was successfully retrieved from the cookie
if (!isNaN(orderQuantity)) {
    console.log(`The value of myInt is ${orderQuantity}`);
} else {
    console.log(`Where is the cookie?`);
}