const todayContainer = document.querySelector("#todayWeather");
const tomorrowContainer = document.querySelector("#tomorrowWeather");
const dayAfterContainer = document.querySelector("#dayAfterTomorrowWeather");

const createWeatherUI = (weatherData) => {
  const { location, current, forecast } = weatherData;
  const days = forecast.forecastday;


  const today = new Date(location.localtime);
  const todayLabel = today.toLocaleString("en-us", { weekday: "long" });

  todayContainer.innerHTML = `
    <div class="today-weather p-3 text-center text-white">
      <h5>Today</h5>
      <p class="text-warning">${todayLabel}</p>
      <img src="https://${current.condition.icon}" alt="${current.condition.text}" />
      <h2>${Math.round(current.temp_c)}<sup>°C</sup></h2>
      <p>${current.condition.text}</p>
      <div class="d-flex justify-content-around mt-3">
        <span><i class="bi bi-droplet"></i> ${current.humidity}%</span>
        <span><i class="bi bi-wind"></i> ${current.wind_kph} km/h</span>
      </div>
    </div>
  `;

  const tomorrowData = days[1];
  const tomorrowDate = new Date(tomorrowData.date);
  const tomorrowLabel = tomorrowDate.toLocaleString("en-us", { weekday: "long" });

  tomorrowContainer.innerHTML = `
    <div class="other-day-weather p-3 text-center text-white">
      <h5>Tomorrow</h5>
      <p class="text-warning">${tomorrowLabel}</p>
      <img src="https://${tomorrowData.day.condition.icon}" alt="${tomorrowData.day.condition.text}" />
      <h2>${Math.round(tomorrowData.day.maxtemp_c)}<sup>°C</sup></h2>
      <p>Min: ${Math.round(tomorrowData.day.mintemp_c)}<sup>°C</sup></p>
      <p>${tomorrowData.day.condition.text}</p>
    </div>
  `;

  const dayAfterData = days[2];
  const dayAfterDate = new Date(dayAfterData.date);
  const dayAfterLabel = dayAfterDate.toLocaleString("en-us", { weekday: "long" });

  dayAfterContainer.innerHTML = `
    <div class="day-after-tomorrow p-3 text-center text-white">
      <h5>Day After</h5>
      <p class="text-warning">${dayAfterLabel}</p>
      <img src="https://${dayAfterData.day.condition.icon}" alt="${dayAfterData.day.condition.text}" />
      <h2>${Math.round(dayAfterData.day.maxtemp_c)}<sup>°C</sup></h2>
      <p>Min: ${Math.round(dayAfterData.day.mintemp_c)}<sup>°C</sup></p>
      <p>${dayAfterData.day.condition.text}</p>
    </div>
  `;
};

const fetchWeather = async (city) => {
  try {
    const res = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=f363c6f19c364fe5955182616230308&q=${city}&days=3`
    );
    if (!res.ok) throw new Error("City not found");
    const data = await res.json();
    createWeatherUI(data);
  } catch (err) {
    document.querySelector("#errorMessage").classList.remove("d-none");
    setTimeout(() => {
      document.querySelector("#errorMessage").classList.add("d-none");
    }, 3000);
  }
};

const input = document.querySelector("#search");
const button = document.querySelector('input[type="button"]');

button.addEventListener("click", () => {
  const city = input.value.trim();
  if (city) fetchWeather(city);
});

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const city = input.value.trim();
    if (city) fetchWeather(city);
  }
});


const getlocation = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      console.log(pos.coords);
      const lati = pos.coords.latitude; 
      const long = pos.coords.longitude; 
      checkWeatherbylocation(lati, long);
    },
    (err) => {
      console.error("Geolocation error:", err.message);
      alert("Unable to fetch location. Please allow location access.");
    });
  };
  
  getlocation()
  
  
  const checkWeatherbylocation = async (lati, long) => {
    let req = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${long}&appid=97ed86b99fdcf738c7a080e0fa9fde20&units=metric`);
  
    if (!req.ok) {
      alert("City not found");
      console.error("City not found");
      return;
    }
  
    let res = await req.json();
    console.log(res);
    createWeatherUI(res);
  };
  setTimeout(() => {
    if (!weatherCard.innerHTML.trim()) {
        fetchWeather("Mumbai");
    }
  }, 3000);
  