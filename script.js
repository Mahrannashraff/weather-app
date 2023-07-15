const searchBar = document.getElementById('search');
const submitBtn = document.querySelector('.submit');
const region = document.querySelector('.region');
const tempC = document.querySelector('.temp-c');
const humidity = document.querySelector('.humidity');
const clouds = document.querySelector('.clouds');
const windSpeed = document.querySelector('.wind-speed');

async function getWeather(searchBarValue = 'Cairo, Egypt'){
    const fetching = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=1986480656ec490d950204923202611&q=${searchBarValue}`,
    {
      mode: 'cors',
    }
    );
    const response = await fetching.json();
    region.innerHTML = `${response.location.name} / ${response.location.region} / ${response.location.country}`;
    tempC.innerHTML = `Temparature in C = ${response.current.temp_c}`;
    humidity.innerHTML = `Humidity = ${response.current.humidity}%`;
    clouds.innerHTML = `Clouds = ${response.current.cloud}%`;
    windSpeed.innerHTML = `Wind Speed = ${response.current.wind_kph}`;
    console.log(response);
}

getWeather();

submitBtn.addEventListener('click', (e) => {
    e.preventDefault;
    getWeather(searchBar.value);
});