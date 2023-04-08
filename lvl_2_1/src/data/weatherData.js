import { BsFillSunFill } from "react-icons/bs";
import { BsSunrise } from "react-icons/bs";
import { BsFillCloudSunFill } from "react-icons/bs";
import { AiTwotoneCloud } from "react-icons/ai";
import { BsFillCloudLightningRainFill } from "react-icons/bs";

export const weatherData = [
  {
    day: "Montag",
    icon: <BsFillSunFill size={25} />,
    daytimeTemperature: "15°C",
    eveningtimeTemperature: "11°C",
  },
  {
    day: "Dienstag",
    icon: <BsSunrise size={25} />,
    daytimeTemperature: "15°C",
    eveningtimeTemperature: "11°C",
  },
  {
    day: "Donnerstag",
    icon: <BsFillCloudSunFill size={25} />,
    daytimeTemperature: "15°C",
    eveningtimeTemperature: "11°C",
  },
  {
    day: "Mittwoch",
    icon: <AiTwotoneCloud size={25} />,
    daytimeTemperature: "15°C",
    eveningtimeTemperature: "11°C",
  },
  {
    day: "Freitag",
    icon: <BsFillCloudLightningRainFill size={25} />,
    daytimeTemperature: "15°C",
    eveningtimeTemperature: "11°C",
  },
  {
    day: "Samstag",
    icon: <BsFillSunFill size={25} />,
    daytimeTemperature: "15°C",
    eveningtimeTemperature: "11°C",
  },
  {
    day: "Sontag",
    icon: <BsFillCloudLightningRainFill size={25} />,
    daytimeTemperature: "15°C",
    eveningtimeTemperature: "11°C",
  },
];
