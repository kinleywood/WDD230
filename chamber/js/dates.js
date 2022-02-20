// Declare datefeild = element with id of date
const datefield = document.querySelector("#date");

// Get the current date using a date object
const now = new Date ();
const fulldate = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(now);
const day = now.getDay();



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

// On Mondays and Tuesdays display a banner

switch (day) {
    case 2:
        document.querySelector("#meetAndGreet").style.display = "block";
    break;
    case 3:
        document.querySelector("#meetAndGreet").style.display = "block";
    break;
//     default:
//         document.querySelector("#meetAndGreet").style.display = "none";
}

// link the the element with and id of timeBetweenVisits
const timeBetweenVisits = document.querySelector("#timeBetweenVisits");

// get the value stored in local storage.
let lastVisit = Date.parse(window.localStorage.getItem("visits-ls"));


if (lastVisit !== null) { () => {
	let dateDiff = (Date.parse(now) - lastVisit) / (1000*60*60*24);
    
    timeBetweenVisits.textContent = dateDiff;
}} else {
	timeBetweenVisits.textContent = `This is your first visit!`;
}


localStorage.setItem("visits-ls", now);