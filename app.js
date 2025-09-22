const textCity = document.getElementById("city");
const searchButton = document.getElementById("searchBtn");
const cityName = document.getElementById("cityName");
const tempreture = document.getElementById("tempreture");
const humidity = document.getElementById("humadity");

const weatherCondition = document.getElementById("weatherCondition");
const weatherIcon = document.getElementById("weatherIcon");
const errorMessage = document.getElementById("error");

searchButton.addEventListener("click", fetchWeather);

function fetchWeather() {
  const city = textCity.value.trim(); // ✅ Correct input
  const apiKey = "293af75b2a0d2971530225f349e78d2f";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
 

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.cod == "404") {
        errorMessage.textContent = "City not found!";
        weatherIcon.src = "";
      } else {
        cityName.textContent = `${data.name}`;
        tempreture.textContent = `Temperature: ${data.main.temp} °C`;
        humidity.textContent = `Humidity: ${data.main.humidity}%`;
        weatherCondition.textContent = `Condition: ${data.weather[0].description}`;
        // const iconMap = {
        //   Smoke: "smoke.jpg",
        //   Clear: "custom-icons/sunny.png",
        //   Mist: "mist.png",
      
        // };

        weatherIcon.src =
          // iconMap[data.weather[0].main] ||
          `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

        
      }
    })
    .catch((error) => {
      errorMessage.textContent = "Error fetching weather data!";
      weatherIcon.src = "";
    });
}
