const requestURL = "https://kinleywood.github.io/wdd230/templeInn&Suites/data/temples.json";
const templeSpotlight = document.querySelector(".templeSpotlight");
// const cards = document.querySelector(".cards");
// const gridBtn = document.querySelector(".gridBtn");
// const listBtn = document.querySelector(".listBtn");


fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); 
        const temples= jsonObject["name"];
        temples.forEach(displayTemple);
    });



function displayTemple(temple) {
    // Create elements to add to the document
    let card = document.createElement("section");
    let name = document.createElement("h2");
    let address = document.createElement("p");
    let phone = document.createElement("p");
    let website = document.createElement("a");
    let logo = document.createElement("img");
    let hours = document.createElement("p");

    // Change the textContent properties
    name.textContent = temple.name;
    address.textContent = temple.address;
    phone.textContent = temple.phone;
    website.setAttribute("href", temple.website);
    website.setAttribute("target", "_blank")
    website.textContent = temple.website;
    hours.textContent = todaysHours(temple);

    // Build the image attributes
    logo.setAttribute("src", temple.image);
    logo.setAttribute("alt", `Logo of ${temple.name}`);
    // logo.setAttribute("loading", "lazy");

     // Get the temple hours for today

    function todaysHours(temple) {
        let day = now.getDay();
        if (temple.hours[day] == "CLOSED") {
            return "CLOSED TODAY";
        }
        else {
            return `Open from ${temple.hours[day]} today.`;
        };
};
    

    // Append to card
    card.appendChild(name);
    card.appendChild(logo);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);
    card.appendChild(hours);

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

