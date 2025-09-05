'use client';

import { useEffect, useState } from "react";

type WeatherData = {
    temperature: number,
    weathercode: keyof typeof WEATHER_CODES,
}

const WEATHER_CODES = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Fog",
    48: "Rime fog",
    51: "Light drizzle",
    53: "Moderate drizzle",
    55: "Dense drizzle",
    56: "Light freezing drizzle",
    57: "Dense freezing drizzle",
    61: "Light rain",
    63: "Moderate rain",
    65: "Heavy rain",
    66: "Light freezing rain",
    67: "Heavy freezing rain",
    71: "Light snow",
    73: "Moderate snow",
    75: "Heavy snow",
    77: "Snow grains",
    80: "Light rain showers",
    81: "Moderate rain showers",
    82: "Violent rain showers",
    85: "Light snow showers",
    86: "Heavy snow showers",
    95: "Thunderstorm",
    96: "Thunderstorm with hail",
    99: "Severe hailstorm"
} as const;

const formatWeather = (data: WeatherData | null) => {
    if (!data)
        return null;

    const description = WEATHER_CODES[data.weathercode] || "We’re cooked 🔥";

    return `${description} ${data.temperature}°`;
};

export function RealtimeWeather() {
    const [data, setData] = useState<WeatherData | null>(null);

    useEffect(() => {
        const fetchWeather = async () => {
            await fetch("/api/weather")
                .then(response => response.json())
                .then(response => setData(response.data));
        }

        fetchWeather();
    }, []);
    
    const weather = formatWeather(data);

    return (
        <span className="text-deep-purple-400">
            {weather ?? 'Loading weather...'}
        </span>
    )
}
