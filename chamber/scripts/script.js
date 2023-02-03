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
