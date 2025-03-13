<template>
  <div id="app">
    <h1>OpenWeatherMap API Example</h1>
    <input v-model="city" placeholder="Enter a city name" />
    <button @click="fetchWeather">Get Weather</button>

    <div v-if="weather">
      <h2>Weather in {{ weather.name }}</h2>
      <p><strong>Temperature:</strong> {{ weather.main.temp }}°C</p>
      <p><strong>Weather:</strong> {{ weather.weather[0].description }}</p>
      <p><strong>Humidity:</strong> {{ weather.main.humidity }}%</p>
      <p><strong>Wind Speed:</strong> {{ weather.wind.speed }} m/s</p>
    </div>

    <div v-if="error">
      <p style="color: red;">{{ error }}</p>
    </div>
  </div>
</template>

<script>
import api from './services/api';

export default {
  name: 'App',
  data() {
    return {
      city: '', // User input for city
      weather: null, // Weather data from API
      error: null, // Error message
    };
  },
  methods: {
    async fetchWeather() {
      if (!this.city) {
        this.error = 'Please enter a city name.';
        return;
      }

      try {
        const response = await api.get('/weather', {
          q: this.city, // Pass the city name as a query parameter
        });

        this.weather = response.data; // Store weather data
        this.error = null;
      } catch (error) {
        this.error = 'Error fetching weather data. Please try again.';
        console.error('Error:', error);
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

input {
  padding: 10px;
  margin-right: 10px;
  width: 300px;
}

button {
  padding: 10px 20px;
  cursor: pointer;
}
</style>