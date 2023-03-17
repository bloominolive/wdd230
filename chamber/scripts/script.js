// Get date for header
const datefieldUK = document.getElementById("date");
const now = new Date();
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
dateStyle: "full"
}).format(now);
datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;
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

// Get date for displaying meeting banner at top of each page
var today = new Date();
var dayOfWeek = today.getDay();

if (dayOfWeek == 1 || dayOfWeek == 2) {
  document.getElementById("meeting-banner").style.display = "block";
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




  
