//loadcookie
const cookieValue = document.cookie
.split('; ')
.find(row => row.startsWith('orderquantity='))
?.split('=')[1];

const orderQuantity = parseInt(cookieValue);

const orderQuantitySpan = document.getElementById('order-quantity');

// Check if the integer value was successfully retrieved from the cookie
if (!isNaN(orderQuantity)) {
    orderQuantitySpan.textContent = orderQuantity;
}