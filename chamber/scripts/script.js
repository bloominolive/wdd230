const datefield = document.getElementById('curYr');
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle:"full"}).format(now);
datefield.innerHTML = `<em>${fulldate} </em>`;

/* var date = new Date();
var year = date.getFullYear();
document.querySelector("#curYr").innerHTML = year;
let lastModified = new Date(document.lastModified);        
document.getElementById("docLastUpdated").innerHTML = lastModified */