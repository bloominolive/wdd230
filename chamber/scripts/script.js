
const datefieldUK = document.getElementById("date");
const now = new Date();
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
dateStyle: "full"
}).format(now);
datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById('hamburgerBtn')
x.onclick = toggleMenu;

var date = new Date();
var year = date.getFullYear();
document.querySelector("#curYr").innerHTML = year;
let lastModified = new Date(document.lastModified);        
document.getElementById("docLastUpdated").innerHTML = lastModified


var today = new Date();
var dayOfWeek = today.getDay();

if (dayOfWeek == 1 || dayOfWeek == 2) {
  document.getElementById("meeting-banner").style.display = "block";
}



const currentDate = new Date();
const lastVisit = localStorage.getItem('lastVisit');
if (!lastVisit) {
  localStorage.setItem('lastVisit', currentDate.toString());
} else {
  const lastVisitDate = new Date(lastVisit);
  const timeDiff = currentDate.getTime() - lastVisitDate.getTime();
  const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
  document.getElementById("visits").innerHTML = `<em> ${daysDiff} </em>`;
  localStorage.setItem('lastVisit', currentDate.toString());
}

const images = document.querySelectorAll("[data-src]");

function preloadImage(image) {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {
      image.removeAttribute("data-src");
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
}else {
    images.forEach(image => {
        preloadImage(image);
    });
}

