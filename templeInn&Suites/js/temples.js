const requestURL = "https://kinleywood.github.io/wdd230/templeInn&Suites/data/temples.json";
// const templeSpotlight = document.querySelector(".templeSpotlight");
const cards = document.querySelector(".cards");
// const gridBtn = document.querySelector(".gridBtn");
// const listBtn = document.querySelector(".listBtn");


fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); 
        const temples= jsonObject["temples"];
        temples.forEach(displayTemple);
    });



function displayTemple(temple) {
    // Create elements to add to the document
    let card = document.createElement("section");
    let name = document.createElement("h2");
    let address = document.createElement("a");
    let phone = document.createElement("p");
    let email = document.createElement("p");
    let services = document.createElement("p");
    let history = document.createElement("p");
    let ordinanceSchedule = document.createElement("p");
    let sessionSchedule = document.createElement("p");
    let templeClosureSchedule = document.createElement("ul");
    let picture = document.createElement("img");

// Change the textContent properties
    name.textContent = temple.name;
    address.textContent = temple.address;
    address.setAttribute("href", temple.address);
    address.setAttribute("target", "_blank")
    phone.textContent = temple.phone;
    email.textContent = temple.email;
    services.innerHTML = temple.services;
    history.innerHTML = temple.history;
    ordinanceSchedule.textContent = temple.ordinanceSchedule;
    sessionSchedule.textContent = temple.sessionSchedule;
    templeClosureSchedule.innerHTML = temple.templeClosureSchedule;
// Build the image attributes
    picture.setAttribute("src", temple.picture);
    picture.setAttribute("alt", `Image of the ${temple.name}.`);

    
// Append to card
    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(email);
    card.appendChild(services);
    card.appendChild(history);
    card.appendChild(ordinanceSchedule);
    card.appendChild(sessionSchedule);
    card.appendChild(templeClosureSchedule);
    card.appendChild(picture);

    // Append to existing HTML
    cards.appendChild(card);

};

// gridBtn.addEventListener("click", () => {
//     cards.classList.add("grid");
//     cards.classList.remove("list");
// });

// listBtn.addEventListener("click" , () => {
//     cards.classList.add("list");
//     cards.classList.remove("grid");
// })

