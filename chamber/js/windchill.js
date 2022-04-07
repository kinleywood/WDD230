// Calculate Windchill
function windChill(t, s){
  if (t <= 50 && s > 3) {
    // calculate the windchill
    let f = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);
    document.querySelector("#windChill").innerHTML = `${Math.round(f)}&deg;F`;
  } 
  else {
    document.querySelector("#windChill").innerText = "N/A";
  }
}
// --------------Weather API-------------------
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5583714&units=imperial&appid=a06ca24ed79ff6ee8e5088116862388d";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.table(jsObject);
    const iconSrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    const temp = jsObject.main.temp;
    const windSpeed = jsObject.wind.speed;
    document.querySelector(".weatherIcon").setAttribute("src", iconSrc);
    document.querySelector(".weatherIcon").setAttribute("alt", desc);
    document.querySelector("#temperature").textContent = Math.round(temp);
    document.querySelector(".sky").textContent = desc;
    document.querySelector("#windSpeed").textContent = Math.round(windSpeed);
    windChill(temp, windSpeed);
  });


