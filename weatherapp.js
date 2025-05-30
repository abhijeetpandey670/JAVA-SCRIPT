const apiKey = "08aad07b15dd8b555f4185304c7001a5";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox =document.querySelector(".search input")
const searchBtn =document.querySelector(".search button");

// const weatherIcon = document.querySelector("weather-icon");
async function checkWeather(city){
    //  const response = await fetch(apiUrl + city + `&appid=${apikey}`);
     const response = await fetch(apiUrl + city + `&appid=${apiKey}`)

    var data =await response.json();
    console.log(data)
    document.querySelector(".city").innerHTML =data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity") .innerHTML = data.main.humidity + "%";
      document.querySelector(".wind") .innerHTML = data.wind.speed + "km/h";



}
// checkWeather()
searchBtn.addEventListener("click", () =>{
  checkWeather(searchBox.value);
})
