'use client';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import axios from 'axios';

// Dynamically import the map components with no SSR
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
);

// Create a separate component for the map
const Map = dynamic(() => import('../components/Map'), { ssr: false });

const WeatherPage = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState({ lat: 51.505, lng: -0.09 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;

  useEffect(() => {
    if (!isClient) return;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          fetchWeatherData(position.coords.latitude, position.coords.longitude);
        },
        (error) => {
          console.error('Error getting location:', error);
          fetchWeatherData(location.lat, location.lng);
        }
      );
    }
  }, [isClient]);

  const fetchWeatherData = async (lat, lng) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
      );
      setWeatherData(response.data);
      setError(null);
    } catch (err) {
      setError('Error fetching weather data');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const searchLocation = async (e) => {
    e.preventDefault(); // Prevent form submission
    if (!searchQuery.trim()) return;

    try {
      setLoading(true);
      setError(null);
      
      // First, get coordinates for the searched location
      const geoResponse = await axios.get(
        `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(searchQuery)}&limit=1&appid=${API_KEY}`
      );

      if (geoResponse.data && geoResponse.data.length > 0) {
        const { lat, lon: lng } = geoResponse.data[0];
        const newLocation = { lat, lng };
        
        // Update location and fetch weather data
        setLocation(newLocation);
        await fetchWeatherData(lat, lng);
        
        // Update map view
        if (map) map.setView([lat, lng], 13);
      } else {
        setError('Location not found');
      }
    } catch (err) {
      setError('Error searching location');
      console.error('Search error:', err);
    } finally {
      setLoading(false);
    }
  };

  if (!isClient) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-beige-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            Weather Forecast
          </h1>
          <form onSubmit={searchLocation} className="flex justify-center gap-4 mb-8">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Enter city name..."
              className="px-4 py-2 border rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <button
              type="submit"
              className="bg-primary-500 text-white px-6 py-2 rounded-lg hover:bg-primary-600 transition-colors"
              disabled={loading}
            >
              {loading ? 'Searching...' : 'Search'}
            </button>
          </form>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Weather Info Card */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
              </div>
            ) : weatherData ? (
              <div className="space-y-4">
                <div className="text-center">
                  <h2 className="text-2xl font-bold">{weatherData.name}</h2>
                  <p className="text-5xl font-bold text-primary-500 my-4">
                    {Math.round(weatherData.main.temp)}°C
                  </p>
                  <p className="text-xl capitalize">{weatherData.weather[0].description}</p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <p className="text-gray-600">Humidity</p>
                    <p className="text-xl font-bold">{weatherData.main.humidity}%</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <p className="text-gray-600">Wind Speed</p>
                    <p className="text-xl font-bold">{weatherData.wind.speed} m/s</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <p className="text-gray-600">Feels Like</p>
                    <p className="text-xl font-bold">{Math.round(weatherData.main.feels_like)}°C</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <p className="text-gray-600">Pressure</p>
                    <p className="text-xl font-bold">{weatherData.main.pressure} hPa</p>
                  </div>
                </div>
              </div>
            ) : null}
          </div>

          {/* Map */}
          <div className="h-[400px] bg-white rounded-xl shadow-lg overflow-hidden">
            {isClient && (
              <Map location={location} weatherData={weatherData} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherPage; 