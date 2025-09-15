import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Dashboard() {

    const [getDataWeather, setDataWeather] = useState<WeatherResponse | null>(null);


useEffect(()=> {
    getData()
}, [])

function getData() {
    //https://api.openweathermap.org/data/2.5/weather?q=Jakarta&units=imperial&Mode=html&appid=4dd65eff253bb6900bd38290b5dc30b9
    axios.get("https://api.openweathermap.org/data/2.5/weather?q=Jakarta&units=imperial&Mode=html&appid=4dd65eff253bb6900bd38290b5dc30b9").then((res)=> {
        setDataWeather(res.data)
        console.log(res, 'res data');
    })
}

  return (
    <div>
      <div className="App">
      <h1>Cuaca di {getDataWeather?.name}</h1>

      <div className="box">
        <h2>Weather</h2>
        <p>
             {getDataWeather?.weather.map((data, index) => (
  <div key={index}>
    <p>{data.main}</p>
    <p>Description: {data.description}</p>
  </div>
))}
        </p>
      </div>

        <h2>Main Info</h2>
        <p>Temperature: {getDataWeather?.main.temp} °F</p>
        <p>Feels like: {getDataWeather?.main.feels_like} °F</p>
        <p>Humidity: {getDataWeather?.main.humidity}%</p>
        <p>Pressure: {getDataWeather?.main.pressure} hPa</p>
    </div>
    </div>
  )
}

type WeatherItem = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

type MainInfo = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
};

type WeatherResponse = {
  name: string;
  main: MainInfo;
  weather: WeatherItem[];
};