const requestURL = "https://kinleywood.github.io/wdd230/templeInn&Suites/data/temples.json";
// const templeSpotlight = document.querySelector(".templeSpotlight");
const cards = document.querySelector(".cards");



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
    let services = document.createElement("ul");
    let history = document.createElement("p");
    let ordinanceSchedule = document.createElement("p");
    let sessionSchedule = document.createElement("p");
    let templeClosureSchedule = document.createElement("ul");
    let picture = document.createElement("picture");
    let smallImg = document.createElement("source");
    let mediumImg = document.createElement("source");
    let largeImg = document.createElement("source");
    let img = document.createElement("img");
    let div = document.createElement("div");

// Change the textContent properties
    card.setAttribute("class", temple.id)
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
    smallImg.setAttribute("media", "(max-width: 400px)");
    smallImg.setAttribute("srcset", temple.smallPicture);
    largeImg.setAttribute("media", "(max-width: 832px)");
    largeImg.setAttribute("srcset",temple.largePicture);
    img.setAttribute("src", temple.largePicture);
    img.setAttribute("alt", `Image of the ${temple.name}.`);
    picture.setAttribute("class", "templeImg");

// Append to picture
    picture.appendChild(smallImg);
    picture.appendChild(mediumImg);
    picture.appendChild(largeImg);
    picture.appendChild(img);

// Append to picture
    div.appendChild(picture);
    div.appendChild(name);
    
// Append to card
    card.appendChild(div);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(email);
    card.appendChild(services);
    card.appendChild(history);
    card.appendChild(ordinanceSchedule);
    card.appendChild(sessionSchedule);
    card.appendChild(templeClosureSchedule);
    

    // Append to existing HTML
    cards.appendChild(card);

};



