const initApp = async () => {
    // get json data from db
    const temples = await getDataFromDB();
    // render data to page
    renderTemples(temples);
    // add listeners
    listenForLikes();
  };
  
  document.addEventListener("DOMContentLoaded", initApp);
  
  const getDataFromDB = async () => {
    const requestURL = await fetch(
      "https://kinleywood.github.io/wdd230/templeInn&Suites/data/temples.json"
    );
    const jsonData = await requestURL.json();
    return jsonData.data;
  };
  
  const renderTemples = (temples) => {
    const cards = document.querySelector(".cards");
    const cardsArray = [];
  
    temples.forEach((temple) => {
      const elemObj = createCardElements();
      const card = createTempleCard(elemObj, temple);
      cardsArray.push(card);
    });
  
    cardsArray.forEach((card) => {
      cards.appendChild(card);
    });
  };
  
  const createCardElements = () => {
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

	return {card, name, address, phone, email, services, hovHistory, history, ordinanceSchedule, sessionSchedule, templeClosureSchedule, picture, smallImg, mediumImg, largeImg, img, div, likeBtn};
  };
  
  const createTempleCard = (elemObj, temple) => {
    const {card, name, address, phone, email, services, hovHistory, history, ordinanceSchedule, sessionSchedule, templeClosureSchedule, picture, smallImg, mediumImg, largeImg, img, div, likeBtn} = elemObj;
  
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
    return card;
  };
  
  const listenForLikes = () => {
    const likes = document.querySelectorAll(".likeBtn");
    likes.forEach(like => {
     like.addEventListener("click", (event) => {
       event.target.classList.toggle("like-no");
       event.target.classList.toggle("like-yes");
       if (event.target.classList.contains("like-yes")) {
         console.log("✅💾 Saving Favorite...");
         getFaveData(event.target);
       } else {
         console.log("❌ Removing Favorite...");
         getFaveData(event.target);
       }
     })
    })
  }
  
  const getFaveData = (elem) => {
    const parent = elem.parentElement;
    const img = parent.querySelector("img").src;
    const name = parent.querySelector("h2").textContent;
    const email = parent.querySelector("p").textContent;
    const faveObj = { img, name, email };
    console.log(faveObj);
  }
