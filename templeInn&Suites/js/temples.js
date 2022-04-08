const requestURL = "https://kinleywood.github.io/wdd230/templeInn&Suites/data/temples.json";
// const templeSpotlight = document.querySelector(".templeSpotlight");
const cards = document.querySelector(".cards");



fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const temples= jsonObject["temples"];
        temples.forEach(displayTemple);

        let likeBtn = document.querySelector(".likeBtn");
        likeBtn.addEventListener("click", toggleColor())
    });

function displayTemple(temple) {
    // Create elements to add to the document
    let card = document.createElement("section");
    let name = document.createElement("h2");
    let address = document.createElement("a");
    let phone = document.createElement("p");
    let email = document.createElement("p");
    let services = document.createElement("ul");
    let hovHistory = document.createElement("div");
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
    let likeBtn = document.createElement("div");

// Change the textContent properties
    card.setAttribute("class", temple.id);
    name.textContent = temple.name;
    address.innerHTML = `<span class="bold">Address:</span> ${temple.address}`;
    address.setAttribute("href", temple.googleMaps);
    address.setAttribute("target", "_blank")
    phone.innerHTML = `<span class="bold">Phone Number:</span> ${temple.phone}`;
    email.innerHTML = `<span class="bold">Email:</span> ${temple.email}`;
    services.innerHTML = `<span class="bold">Availible Services:</span> ${temple.services}`;
    hovHistory.textContent = "See temple history!";
    hovHistory.setAttribute("class", "hovHistory");
    hovHistory.setAttribute("id", "history");
    history.innerHTML = temple.history;
    history.setAttribute("class", "history");
    ordinanceSchedule.textContent = temple.ordinanceSchedule;
    sessionSchedule.textContent = temple.sessionSchedule;
    templeClosureSchedule.innerHTML = `<span class="bold">Temple Closure Schedule:</span> ${temple.templeClosureSchedule}`;
    likeBtn.innerHTML = "&#10084;";
    likeBtn.setAttribute("class", "likeBtn");
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
    div.appendChild(hovHistory);
    div.appendChild(history);
    div.appendChild(likeBtn);
    
// Append to card
    card.appendChild(div);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(email);
    card.appendChild(services);
    card.appendChild(ordinanceSchedule);
    card.appendChild(sessionSchedule);
    card.appendChild(templeClosureSchedule);
    

    // Append to existing HTML
    cards.appendChild(card);

};


function toggleColor () {
    console.log("It worked!");
}

