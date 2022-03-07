// link the the element with and id of timeBetweenVisits
const timeBetweenVisits = document.querySelector("#timeBetweenVisits");

// get the value stored in local storage.
let lastVisit = Date.parse(window.localStorage.getItem("visits-ls"));
// let lastVisit = Date.parse("Sun Feb 20 2022 09:48:13 GMT-0700 (Mountain Standard Time)")

if (isNaN(lastVisit) !== true) { 
    timeBetweenVisits.textContent = Math.round((Date.parse(now) - lastVisit) / (1000*60*60*24));
} else {
	timeBetweenVisits.textContent = `This is your first visit!`;
}

if (timeBetweenVisits.textContent === "1") {
    document.querySelector("#visits").textContent = "Your last visit was ";
    document.querySelector("#daysAgo").textContent = " day ago! Welcome Back!";
} else if (timeBetweenVisits.textContent === "This is your first visit!") {
    document.querySelector("#visits").textContent = "";
    document.querySelector("#daysAgo").textContent = "";
} else if (timeBetweenVisits.textContent === "0") {
    document.querySelector("#timeBetweenVisits").textContent = "";
    document.querySelector("#visits").textContent = "Your last visit was ";
    document.querySelector("#daysAgo").textContent = " today! Welcome Back!";
} else {
    document.querySelector("#visits").textContent = "Your last visit was ";
    document.querySelector("#daysAgo").textContent = " days ago! Welcome Back!";
}

localStorage.setItem("visits-ls", now);