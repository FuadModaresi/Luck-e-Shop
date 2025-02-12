'use client';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for Leaflet icons
const L = typeof window !== 'undefined' ? require('leaflet') : null;
if (L) {
  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  });
}

const Map = ({ location, weatherData }) => {
  if (typeof window === 'undefined') return null;

  return (
    <MapContainer
      center={[location.lat, location.lng]}
      zoom={13}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[location.lat, location.lng]}>
        {weatherData && (
          <Popup>
            <div className="text-center">
              <h3 className="font-bold">{weatherData.name}</h3>
              <p>{Math.round(weatherData.main.temp)}°C</p>
              <p className="capitalize">{weatherData.weather[0].description}</p>
            </div>
          </Popup>
        )}
      </Marker>
    </MapContainer>
  );
};

export default Map; 