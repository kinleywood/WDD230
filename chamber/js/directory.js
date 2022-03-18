const requestURL = "https://kinleywood.github.io/wdd230/chamber/data/data.json";
const cards = document.querySelector(".cards");
const gridBtn = document.querySelector(".gridBtn");
const listBtn = document.querySelector(".listBtn");


fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); 
        const businesses = jsonObject["businesses"];
        businesses.forEach(displayBusiness);
    });



function displayBusiness(business) {
    // Create elements to add to the document
    let card = document.createElement("section");
    let name = document.createElement("h2");
    let address = document.createElement("p");
    let phone = document.createElement("p");
    let website = document.createElement("a");
    let logo = document.createElement("img");
    let hours = document.createElement("p");

    // Change the textContent properties
    name.textContent = business.name;
    address.textContent = business.address;
    phone.textContent = business.phone;
    website.setAttribute("href", business.website);
    website.setAttribute("target", "_blank")
    website.textContent = business.website;
    hours.textContent = todaysHours(business);

    // Build the image attributes
    logo.setAttribute("src", business.image);
    logo.setAttribute("alt", `Logo of ${business.name}`);
    logo.setAttribute("loading", "lazy");

     // Get the business hours for today

    function todaysHours(business) {
        let day = now.getDay();
        console.log(business.hours[day]);
        // console.log =(business.hours[day]);
        // if (business.hours[day] = "CLOSED") {
        //     return "CLOSED TODAY";
        // }
        // else {
        //     return `Open from ${business.hours[day]} today.`;
        // };
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

gridBtn.addEventListener("click", () => {
    cards.classList.add("grid");
    cards.classList.remove("list");
});

listBtn.addEventListener("click" , () => {
    cards.classList.add("list");
    cards.classList.remove("grid");
})

