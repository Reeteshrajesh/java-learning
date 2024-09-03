const button = document.getElementById("search");
const input = document.getElementById("city-input");

const cityName = document.getElementById("city-name");
const citytime = document.getElementById("city-time");
const citytemp = document.getElementById("city-temp");

async function getData(cityName) {
  const promise = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=43c856c89ccc4fd6ab651621243108&q=${cityName}&aqi=yes`
  );
  return await promise.json();
}

button.addEventListener("click", async () => {
  const value = input.value;
  const result = await getData(value);
  cityName.innerText = `${result.location.name},${result.location.region}-${result.location.country}`;
  citytime.innerText = result.location.localtime;
  citytemp.innerText = result.current.temp_c;
  console.log(result);
});

//http://api.weatherapi.com/v1/current.json?key=43c856c89ccc4fd6ab651621243108&q=London&aqi=yes
