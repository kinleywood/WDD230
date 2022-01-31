// Declare datefeild = element with id of date
const datefield = document.querySelector("#date");

// Get the current date using a date object
const now = new Date ();
const fulldate = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(now);

datefield.innerHTML = fulldate;

// Toggle hamburger menu
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;

document.querySelector("#lastmod");
lastmod.textContent = `Last Modification: ${document.lastModified}`;

document.querySelector("#currentYear");
currentYear.innerHTML = `&copy ${new Date().getFullYear()} Aberdeen Chamber`;