const requestURL = "https://kinleywood.github.io/wdd230/templeInn&Suites/data/temples.json";
const cards = document.querySelector(".cards");




fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); 
        const temples= jsonObject["temples"];
        favTemple(temples);
    });

function favTemple(temple) {
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


// Change the textContent properties
    card.setAttribute("class", temple[0].id);
    name.textContent = temple[0].name;
    address.innerHTML = `<span class="bold">Address:</span> ${temple[0].address}`;
    address.setAttribute("href", temple[0].googleMaps);
    address.setAttribute("target", "_blank")
    phone.innerHTML = `<span class="bold">Phone Number:</span> ${temple[0].phone}`;
    email.innerHTML = `<span class="bold">Email:</span> ${temple[0].email}`;
    hovHistory.textContent = "See temple history!";
    hovHistory.setAttribute("class", "hovHistory");
    hovHistory.setAttribute("id", "history");
    history.innerHTML = temple[0].history;
    history.setAttribute("class", "history");
   
// Build the image attributes
    smallImg.setAttribute("media", "(max-width: 400px)");
    smallImg.setAttribute("srcset", temple[0].smallPicture);
    largeImg.setAttribute("media", "(max-width: 832px)");
    largeImg.setAttribute("srcset",temple[0].largePicture);
    img.setAttribute("src", temple[0].largePicture);
    img.setAttribute("alt", `Image of the ${temple[0].name}.`);
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

    
// Append to card
    card.appendChild(div);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(email);

   
    

    // Append to existing HTML
    cards.appendChild(card);

};

function likeHistory() {
    // initialize like Button
    const likeBtn = document.querySelector(".likeBtn");
    likeBtn.addEventListener("click", toggleLike());

};
function toggleLike() {
    console.log("it worked");
}
// document.addEventListener("DOMContentLoaded", displayTemple());

// Show temple history on click:

    // const historyBtn = document.getElementById("history").addEventListener("click", function(e) {
    //     console.log(e);
    // });

