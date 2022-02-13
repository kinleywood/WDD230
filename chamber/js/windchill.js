// temperature
let t = parseInt(document.querySelector("#temperature").innerText);
// wind speed
let s = parseInt(document.querySelector("#windSpeed").innerText);

if (t <= 50 && s > 3) {
    // calculate the windchill
    let f = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);
    document.querySelector("#windChill").innerHTML = `${Math.round(f)}&deg;F`;
}
else {
    document.querySelector("#windChill").innerText = "N/A";
}

