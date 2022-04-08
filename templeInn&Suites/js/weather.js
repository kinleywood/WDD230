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
  const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=4348599&appid=a06ca24ed79ff6ee8e5088116862388d&units=imperial";
  const dailyApi = "https://api.openweathermap.org/data/2.5/onecall?lat=38.9807&lon=-77.1003&appid=a06ca24ed79ff6ee8e5088116862388d&units=imperial";
  
  fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
      console.table(jsObject);
      const iconSrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
      const desc = jsObject.weather[0].description;
      const temp = jsObject.main.temp;
      const windSpeed = jsObject.wind.speed;
      const humidity = jsObject.main.humidity;
      document.querySelector(".weatherIcon").setAttribute("src", iconSrc);
      document.querySelector(".weatherIcon").setAttribute("alt", desc);
      document.querySelector("#temperature").textContent = Math.round(temp);
      document.querySelector(".sky").textContent = desc;
      document.querySelector("#windSpeed").textContent = Math.round(windSpeed);
      document.querySelector("#humidity").textContent = humidity;
      windChill(temp, windSpeed);
    });
  
  
  fetch(dailyApi)
   .then((response) => response.json())
   .then((jsObject) => {
     console.table(jsObject);
     const date = new Date();
     const days = ["Sunday", "Nonday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday"];
     const today = jsObject.daily[0].feels_like.day;
     const tomorrow = jsObject.daily[1].feels_like.day;
     const nextDay = jsObject.daily[2].feels_like.day;
     document.querySelector(".day").textContent = days[date.getDay()];
     document.querySelector(".dayTwo").textContent = days[date.getDay()+1];
     document.querySelector(".dayThree").textContent = days[date.getDay()+2];
     document.querySelector(".today").innerHTML = `${Math.round(today)}&deg;F`;
     document.querySelector(".tomorrow").innerHTML = `${Math.round(tomorrow)}&deg;F`;
     document.querySelector(".nextDay").innerHTML = `${Math.round(nextDay)}&deg;F`;
   });