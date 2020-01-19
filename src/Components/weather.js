import React from 'react';
import data from '../city-weather.json';
export function Weather() {

    return (
        <div className="container">
            {data.map(item =>
                <div key={item.sys.id}
                className='cityWeather'>
                    <h2 className="cityname" >{item.name}, {item.sys.country}</h2>
                    <h3 className="weatherSituation" >{item.weather[0].main}</h3>
                    <p className="weatherSituation" >{item.weather[0].description}</p>
                    <p>{`min-temp: ${item.main.temp_min}`}</p>
                    <p>{`max-temp: ${item.main.temp_max}`}</p>
                    <p>{`location: ${item.coord.lon}, ${item.coord.lat}`}</p>
                </div>
            )}
        </div>
    )
};