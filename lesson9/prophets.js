const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  
    const prophets = jsonObject["prophets"];
    prophets.forEach(displayProphets);
  });

 
function displayProphets(prophet) {
    // Create elements to add to the document
    let card = document.createElement("section");
    let h2 = document.createElement("h2");
    let portrait = document.createElement("img");
    let birthdate = document.createElement("p");
    let birthplace = document.createElement("p");

    // Change thetextContent property of the h2 element to contain the prophet's full name
    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    birthdate.textContent = `Date of Birth: ${prophet.birthdate}`;
    birthplace.textContent = `Place of Birth: ${prophet.birthplace}`;

    // Build the image attributes by using the setAttribute method for the src, alt, and looking attribute values. (Fill in the blank with the appropriate variable.)
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname} - ${prophet.order}${superscript(prophet.order)} Latter-day President`);
    portrait.setAttribute('loading', 'lazy');

    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(birthdate);
    card.appendChild(birthplace);
    card.appendChild(portrait);

    // Add/append the existing HTML div with the cards class with the section(card)
    cards.appendChild(card);

    function superscript(prophet) {switch (prophet) {
      case 1:
        return "st"
          break;
      case 2:
         return "nd"
          break;
      case 3:
        return "rd"
          break;
      default:
        return"th"
          break;
};};}




  