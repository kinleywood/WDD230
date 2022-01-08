document.querySelector("#lastmod");
lastmod.textContent = `Last Modified: ${document.lastModified}`;

document.querySelector("#currentYear");
currentYear.innerHTML = `&copy ${new Date().getFullYear()} -- McKinley Woodin -- Utah`;