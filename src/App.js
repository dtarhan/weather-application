import React from "react";
import { useState } from "react";
import './App.css';


function App() {
  const apikey = "a03f64cd6bd7835ad144431e3f83f55f";
  const [weatherData, setWeatherData] = useState([{}]);
  const [city, setCity] = useState("")

  const getWeather = (event) => {
    if (event.key === "Enter") {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`)
        .then(response => response.json())
        .then(
          data => {
            setWeatherData(data)
            setCity("")
          }
        )
    }

  }
  
console.log(weatherData)


  return (
    <div className="container">


      <input
        className="input"
        placeholder="Enter City..."
        value={city}
        onChange={(event) => setCity(event.target.value)}
        onKeyDownCapture={getWeather}
      />

      { typeof weatherData.main === 'undefined' ? (

        <div> 
         <p> Welcome to Weather Application! Enter a city to get the weather</p>
        </div>

        ):(
          <div className="weather-data"> 
            <p className="city"> <font color="yellow"> <i> City </i> </font> :{weatherData.name} </p>
            <p className="temp"> <font color="purple"> <i> Degree </i> </font>:{Math.round(weatherData.main.temp)} °C </p>
            <p className="weather"> <font color="yellow"> <i> Clouds </i> </font>:{weatherData.weather[0].main} </p>
            <p className="weather"> <font color="purple"> <i> Speed of Wind </i> </font>:{weatherData.wind.speed} (m/sec) </p>
            <p className="weather"> <font color="yellow"> <i> Humidity </i> </font>:{weatherData.main.humidity}  %</p>
                        
          </div>
          
        )
      }

       
          
    </div>
  );
}

export default App;
