
// Hamburger Nav function 
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById('hamburgerBtn')
x.onclick = toggleMenu;

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


