import { weatherData } from "../data/weatherData";

const Days = () => {
  return (
    <ul>
      {weatherData.map((weather) => {
        return (
          <div className="weather-box">
            <li>{weather.day}</li>
            <li>{weather.icon}</li>
            <div className="daily-temp">
              <li className="daytimeTemperature">{weather.daytimeTemperature}</li>
              <li className="eveningtimeTemperature">{weather.eveningtimeTemperature}</li>
            </div>
          </div>
        );
      })}
    </ul>
  );
};

export default Days;
