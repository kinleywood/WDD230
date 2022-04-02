const requestURL = "https://kinleywood.github.io/wdd230/chamber/data/data.json";

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); 
        const businesses = jsonObject["businesses"];
        console.log(businesses[Math.random(6)]);
    });