const datefield = document.getElementById('date');
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle:"full"}).format(now);
datefield.innerHTML = `<em>${fulldate} </em>`;

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