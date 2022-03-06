const requestURL = "https://kinleywood.github.io/wdd230/chamber/data/data.json";
const cards = document.querySelector(".cards");
// const day = new Date().getDay;

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
    website.textContent = business.website;
    hours.textContent = `${todaysHours(business)}`;

    // Build the image attributes
    logo.setAttribute("src", business.image);
    logo.setAttribute("alt", `Logo of ${business.name}`);
    logo.setAttribute("loading", "lazy");
    

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

 // Get the business hours for today
function todaysHours(business) {
    if (business.hours[day] = "CLOSED") {
        return "CLOSED TODAY";
    }
    else {
        return `Open from ${business.hours[day]} today.`;
    };
};

    // Get the business hours for today
    // function todaysHours(business) { switch (day) {
    //     case 0:
    //         if (business.hours[0] = "CLOSED") {
    //             return `Closed today`;}
    //         else {
    //             return `Open from ${business.hours[0]} today.`;}
    //     break;
    //     case 1:
    //         if (business.hours[1] = "CLOSED") {
    //             return `Closed today`;}
    //         else { 
    //             return `Open from ${business.hours[1]} today.`;}
    //     break;
    //     case 2:
    //         if (business.hours[2] = "CLOSED") {
    //             return `Closed today`;}
    //         else { 
    //             return `Open from ${business.hours[2]} today.`;}
    //     break;
    //     case 3:
    //         if (business.hours[3] = "CLOSED") {
    //             return `Closed today`;}
    //         else { 
    //             return `Open from ${business.hours[3]} today.`;}
    //     break;
    //     case 4:
    //         if (business.hours[4] = "CLOSED") {
    //             return `Closed today`;}
    //         else { 
    //             return `Open from ${business.hours[4]} today.`;}
    //     break;
    //     case 5:
    //         if (business.hours[5] = "CLOSED") {
    //             return `Closed today`;}
    //         else { 
    //             return `Open from ${business.hours[5]} today.`;}
    //     break;
    //     case 6:
    //         if (business.hours[6] = "CLOSED") {
    //             return `Closed today`;}
    //         else { 
    //             return `Open from ${business.hours[6]} today.`;}
    //     break;
    // };};