// let todayWeatherBody = document.getElementById("todayWeather");
// let tomorrowWeatherBody = document.getElementById("tomorrowWeather");
// let dayAfterTomorrowWeatherBody = document.getElementById(
//   "dayAfterTomorrowWeather"
// );
// let input = document.getElementById("search");
// let errorMessage = document.getElementById("errorMessage");

// // searching for country

// input.addEventListener("input", function (e) {
//   if (e.target.value == "") {
//     getTodayWeatherData(userZone);
//     getTomorrowWeatherData(userZone);
//     getDayAfterTomorrowWeatherData(userZone);
//   } else {
//     let countryValue = e.target.value;
//     getTodayWeatherData(countryValue);
//     getTomorrowWeatherData(countryValue);
//     getDayAfterTomorrowWeatherData(countryValue);
//   }
// });

// // today weather //

// let todayWeather;

// async function getTodayWeatherData(country) {
//   let todayWeatherData = await fetch(
//     `https://api.weatherapi.com/v1/current.json?key=f363c6f19c364fe5955182616230308&q=${country}`
//   );
//   if (todayWeatherData.status >= 200 && todayWeatherData.status <= 299) {
//     todayWeatherData = await todayWeatherData.json();
//     todayWeather = todayWeatherData;

//     errorMessage.classList.replace("d-block", "d-none");

//     displayTodayWeather();
//   } else {
//     errorMessage.classList.replace("d-none", "d-block");
//   }
// }

// function displayTodayWeather() {
//   let { location, current } = todayWeather;
//   const date = new Date(location.localtime);
//   const month = date.toLocaleString("default", { month: "long" });
//   const day = date.toLocaleString("en-us", { weekday: "long" });
//   const dayNumber = date.getDate();

//   box = `
//   <div class="today-weather">
//   <div class="today-information">
//     <p>${day}</p>
//     <p><span>${dayNumber}</span> ${month}</p>
//   </div>
//   <div class="weather-details text-start">
//     <p>${location.name},</p>
//     <p>${location.country}</p>
//     <div
//       class="today-degree d-flex justify-content-between align-items-center my-3"
//     >
//       <h2>${Math.round(current.temp_c)}<sup>o</sup>C</h2>
//       <img class="img-fluid" src="https://${current.condition.icon}" alt="">
//     </div>
//     <div class="today-weather-information">
//       <p>${current.condition.text}</p>
//       <div
//         class="d-flex justify-content-between align-items-center w-75"
//       >
//         <p class="m-0">
//           <i class="fa-solid fa-umbrella me-1 fs-5"></i>
//           <span>${current.humidity}%</span>
//         </p>
//         <p class="m-0">
//           <i class="fa-solid fa-wind me-1 fs-5"></i
//           ><span>${current.wind_kph} km / h</span>
//         </p>
//         <p class="m-0">
//           <i class="fa-regular fa-compass me-1 fs-5"></i>
//           <span>${current.wind_dir}</span>
//         </p>
//       </div>
//     </div>
//   </div>
// </div>
//   `;

//   todayWeatherBody.innerHTML = box;
// }

// // tomorrow weather //

// let tomorrowWeather;

// async function getTomorrowWeatherData(country) {
//   let tomorrowWeatherData = await fetch(
//     `https://api.weatherapi.com/v1/forecast.json?key=f363c6f19c364fe5955182616230308&days=3&q=${country}`
//   );
//   if (tomorrowWeatherData.status >= 200 && tomorrowWeatherData.status <= 299) {
//     tomorrowWeatherData = await tomorrowWeatherData.json();
//     tomorrowWeather = tomorrowWeatherData;

//     displayTomorrowWeather();

//     errorMessage.classList.replace("d-block", "d-none");
//   } else {
//     errorMessage.classList.replace("d-none", "d-block");
//   }
// }

// function displayTomorrowWeather() {
//   let tomorrowWeatherInformation = tomorrowWeather.forecast.forecastday[1];
//   const date = new Date(tomorrowWeatherInformation.date);
//   const day = date.toLocaleString("en-us", { weekday: "long" });

//   box = `
//   <div class="other-day-weather text-center">
//   <div class="other-day-information d-block">
//     <p class="m-0">${day}</p>
//   </div>
//   <div
//     class="weather-details d-flex justify-content-center align-items-center flex-column"
//   >
//     <div class="other-day-degree">
//     <img class="img-fluid" src="https://${
//       tomorrowWeatherInformation.day.condition.icon
//     }" alt="">
//       <h2>${Math.round(
//         tomorrowWeatherInformation.day.maxtemp_c
//       )}<sup>o</sup>C</h2>
//       <p>${Math.round(
//         tomorrowWeatherInformation.day.mintemp_c
//       )}<sup>o</sup>C</p>
//     </div>
//     <div class="other-day-weather-information">
//       <p>${tomorrowWeatherInformation.day.condition.text}</p>
//     </div>
//   </div>
// </div>
//   `;

//   tomorrowWeatherBody.innerHTML = box;
// }

// // day after tomorrow weather //

// let dayAfterTomorrowWeather;

// async function getDayAfterTomorrowWeatherData(country) {
//   let DayAfterTomorrowWeatherData = await fetch(
//     `https://api.weatherapi.com/v1/forecast.json?key=f363c6f19c364fe5955182616230308&days=3&q=${country}`
//   );
//   if (
//     DayAfterTomorrowWeatherData.status >= 200 &&
//     DayAfterTomorrowWeatherData.status <= 299
//   ) {
//     DayAfterTomorrowWeatherData = await DayAfterTomorrowWeatherData.json();
//     dayAfterTomorrowWeather = DayAfterTomorrowWeatherData;

//     displayDayAfterTomorrowWeather();

//     errorMessage.classList.replace("d-block", "d-none");
//   } else {
//     errorMessage.classList.replace("d-none", "d-block");
//   }
// }

// function displayDayAfterTomorrowWeather() {
//   let dayAfterTomorrowWeatherInformation =
//     dayAfterTomorrowWeather.forecast.forecastday[2];
//   const date = new Date(dayAfterTomorrowWeatherInformation.date);
//   const day = date.toLocaleString("en-us", { weekday: "long" });

//   box = `
//   <div class="other-day-weather text-center day-after-tomorrow">
//   <div class="other-day-information d-block">
//     <p class="m-0">${day}</p>
//   </div>
//   <div
//     class="weather-details d-flex justify-content-center align-items-center flex-column"
//   >
//     <div class="other-day-degree">
//       <img class="img-fluid"
//         src="https://${dayAfterTomorrowWeatherInformation.day.condition.icon}"
//         alt=""
//       />
//       <h2>
//         ${Math.round(
//           dayAfterTomorrowWeatherInformation.day.maxtemp_c
//         )}<sup>o</sup>C
//       </h2>
//       <p>
//         ${Math.round(
//           dayAfterTomorrowWeatherInformation.day.mintemp_c
//         )}<sup>o</sup>C
//       </p>
//     </div>
//     <div class="other-day-weather-information">
//       <p>${dayAfterTomorrowWeatherInformation.day.condition.text}</p>
//     </div>
//   </div>
// </div>
//   `;

//   dayAfterTomorrowWeatherBody.innerHTML = box;
// }

// // get the current user location

// let userZone;

// async function getZone() {
//   let zoneData = await fetch("https://ipinfo.io/?token=13a30ff1de8c72");
//   zoneData = await zoneData.json();
//   userZone = zoneData.city;
//   getTodayWeatherData(userZone);
//   getTomorrowWeatherData(userZone);
//   getDayAfterTomorrowWeatherData(userZone);
// }

// getZone();


const weatherCard = document.querySelector(".weather-card");

const createWeatherUI = (weatherData) => {
  const { location, current, forecast } = weatherData;
  const days = forecast.forecastday;

  let html = `
    <div class="search mb-4 text-center">
      <input type="search" placeholder="Enter city name" id="search" class="form-control w-50 mx-auto" value="${location.name}">
    </div>
    <div class="weather-body container">
      <div class="row">
  `;

  // Day 1 (Today) - use "current"
  const today = new Date(location.localtime);
  const todayLabel = today.toLocaleString("en-us", { weekday: "long" });

  html += `
    <div class="col-md-4 p-2">
      <div class="text-center card p-3 shadow-sm h-100">
        <h5>Today</h5>
        <p class="text-muted">${todayLabel}</p>
        <img class="img-fluid" src="https://${current.condition.icon}" alt="${current.condition.text}" />
        <h2>${Math.round(current.temp_c)}<sup>°C</sup></h2>
        <p class="mb-1">${current.condition.text}</p>
        <div class="d-flex justify-content-around mt-3">
          <div><i class="bi bi-droplet"></i> ${current.humidity}%</div>
          <div><i class="bi bi-wind"></i> ${current.wind_kph} km/h</div>
        </div>
      </div>
    </div>
  `;

  // Day 2 (Tomorrow) & Day 3
  for (let i = 1; i <= 2; i++) {
    const dayData = days[i];
    const date = new Date(dayData.date);
    const label = i === 1 ? "Tomorrow" : "Day After";
    const weekday = date.toLocaleString("en-us", { weekday: "long" });
    const max = Math.round(dayData.day.maxtemp_c);
    const min = Math.round(dayData.day.mintemp_c);
    const condition = dayData.day.condition;

    html += `
      <div class="col-md-4 p-2">
        <div class="text-center card p-3 shadow-sm h-100">
          <h5>${label}</h5>
          <p class="text-muted">${weekday}</p>
          <img class="img-fluid" src="https://${condition.icon}" alt="${condition.text}" />
          <h2>${max}<sup>°C</sup></h2>
          <p>Min: ${min}<sup>°C</sup></p>
          <p class="mb-1">${condition.text}</p>
        </div>
      </div>
    `;
  }

  html += `</div></div>`;
  weatherCard.innerHTML = html;

  // Search Enter key listener
  document.querySelector("#search").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      const city = e.target.value.trim();
      if (city) fetchWeather(city);
    }
  });
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
    alert(err.message);
  }
};

// Default
fetchWeather("Mumbai");
