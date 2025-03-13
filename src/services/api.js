import axios from 'axios';

// Create an instance of axios for OpenWeatherMap API
const apiClient = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5', // OpenWeatherMap API base URL
  headers: {
    'Content-Type': 'application/json',
  },
  params: {
    appid: '6606235ccf884cd7467bc1905d9cdb2c', // Replace with your actual OpenWeatherMap API key
    units: 'metric', // Use metric units (Celsius)
  },
});

// Encapsulate the request layer
export default {
  get(resource, params) {
    return apiClient.get(resource, { params });
  },

  post(resource, data) {
    return apiClient.post(resource, data);
  },

  put(resource, data) {
    return apiClient.put(resource, data);
  },

  delete(resource) {
    return apiClient.delete(resource);
  },
};