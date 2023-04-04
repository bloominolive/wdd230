
// Hamburger Nav function 
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById('hamburgerBtn')
x.onclick = toggleMenu;

//Document last updated for footer
var date = new Date();
var year = date.getFullYear();
document.querySelector("#curYr").innerHTML = year;
let lastModified = new Date(document.lastModified);        
document.getElementById("docLastUpdated").innerHTML = lastModified


//loadcookie
const cookieValue = document.cookie
.split('; ')
.find(row => row.startsWith('orderquantity='))
?.split('=')[1];

const orderQuantity = parseInt(cookieValue);

// Check if the integer value was successfully retrieved from the cookie
if (!isNaN(orderQuantity)) {
    console.log(`The value of myInt is ${orderQuantity}`);
} else {
    console.log(`Where is the cookie?`);
}

//Lazy Loading
const images = document.querySelectorAll("[data-srcset]");

function preloadImage(image) {
    image.setAttribute("srcset", image.getAttribute("data-srcset"));
    image.onload = () => {
      image.removeAttribute("data-srcset");
    };
}

const imgOptions = {
    threshold : 1,
    rootMargin : "0px 0px 2px 0px"
};
  
if ('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((items, imgObserver) => {
        items.forEach(item => {
            if (item.isIntersecting) {
                preloadImage(item.target);
                imgObserver.unobserve(item.target);
            }
        });
    }, imgOptions);
    images.forEach(image => {
        imgObserver.observe(image);
    });
}
else {
    images.forEach(image => {
        preloadImage(image);
    });
}


  const orderQuantitySpan = document.getElementById('order-quantity');
  orderQuantitySpan.textContent = orderQuantity; 




  
