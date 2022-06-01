class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.dewPoint = document.getElementById('w-dewpoint');
        this.feelsLike = document.getElementById('w-feels-like');
        this.wind = document.getElementById('w-wind');
    }

    paint(weather) {
        this.location.textContent = `${weather.location.name}, ${weather.location.region}`;
        this.desc.textContent = weather.current.condition.text;
        this.string.textContent = `${weather.current.temp_f}\u00B0F (${weather.current.temp_c}\u00B0C)`;
        this.icon.setAttribute('src', weather.current.condition.icon);
        this.humidity.textContent = `Relative Humidity: ${weather.current.humidity}%`;
        this.feelsLike.textContent = `Feels Like: ${weather.current.feelslike_f}\u00B0F (${weather.current.feelslike_c}\u00B0C)`;

        const hours = weather.forecast.forecastday[0].hour;
        const localEpoch = parseInt(weather.location.localtime_epoch);
        const currentHourEpoch = localEpoch - (localEpoch % 3600);
        const currentHour = hours.filter(hour => {return hour.time_epoch == currentHourEpoch})[0];

        this.dewPoint.textContent = `Dew Point: ${currentHour.dewpoint_f}\u00B0F (${currentHour.dewpoint_c}\u00B0C)`;
        this.wind.textContent = `Wind: From the ${currentHour.wind_dir} at ${currentHour.wind_mph} MPH Gusting to ${currentHour.gust_mph} MPH`;
    }
}