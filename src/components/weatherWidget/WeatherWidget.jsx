import React, { useEffect, useState } from 'react';
import './weatherWidget.css';

const WeatherWidget = () => {

    const [weather, setWeather] = useState(0);

    const getWeatherAPI = async () => {
        const response = await fetch('http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={apiID}');
        const jsonResponse = await response.json();
        console.log(jsonResponse);
    }

    useEffect(() => {

        getWeatherAPI();

    }, []);

    return (
        <h1>test</h1>
    )

}

export default WeatherWidget;
