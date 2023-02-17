const images = document.querySelectorAll("[data-src]");

function preloadImage(image) {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {
      image.removeAttribute("data-src");
    };
}

const imgOptions = {
    threshold : .75,
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
}else {
    images.forEach(image => {
        preloadImage(image);
    });
}