// WeatherMap.js
import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import "leaflet/dist/leaflet.css";

const WeatherMap = () => {
  const apiKey = 'f2e41bbf55c69a846243962a4b951b76'; // Replace with your OpenWeatherMap API key

  return (
    <MapContainer
    center={[0, 0]}
    zoom={5}
    style={{ height: '100vw', width: '100vw' }}
  >
    <TileLayer
      url="https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=DYAQhMjPhq0nSOazVIiB"
      attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
    />
      <TileLayer
        url={`https://tile.openweathermap.org/map/clouds/{z}/{x}/{y}.png?appid=${apiKey}`}
        attribution='&copy; OpenWeatherMap'
      />
    </MapContainer>
  );
};

export default WeatherMap;
