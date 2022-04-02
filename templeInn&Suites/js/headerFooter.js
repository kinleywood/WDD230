// Toggle hamburger menu
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
    document.querySelector("header").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;


// When was the document last modified?
document.querySelector("#lastmod");
lastmod.textContent = `Last Modification: ${document.lastModified}`;

document.querySelector("#currentYear");
currentYear.innerHTML = `&copy ${new Date().getFullYear()} Aberdeen Chamber`;