class Weather {
    constructor(city, state) {
        this.apiKey = ''; // Omitted for GitHub
        this.city = city.replaceAll(' ', '-').toLowerCase();
        this.state = state.replaceAll(' ', '-').toLowerCase();
    }

    // Fetch weather from API
    async getWeather() {
        const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${this.apiKey}&q=${this.city}-${this.state}-united-states-of-america&days=1&aqi=no&alerts=no`);

        const responseData = await response.json();

        return responseData;
    }

    // Change weather location
    changeLocation(city, state) {
        this.city = city.replaceAll(' ', '-').toLowerCase();
        this.state = state.replaceAll(' ', '-').toLowerCase();
    }
}