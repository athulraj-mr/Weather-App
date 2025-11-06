import cloudyRainLogo from '../assets/svg/cloudy-rain.svg'
import cloudyLogo from '../assets/svg/cloudy.svg'
import rainNightLogo from '../assets/svg/rain-night.svg'
import rainLogo from '../assets/svg/rain.svg'
import starMoonLogo from '../assets/svg/star-moon.svg'
import sunnyLogo from '../assets/svg/sunny.svg'
import thunderStormLogo from '../assets/svg/thunderstrom.svg'
import windNightLogo from '../assets/svg/wind-night.svg'
import windSunnyLogo from '../assets/svg/wind-sunny.svg'
import windCloudyLogo from '../assets/svg/windy-cloud.svg'

export const logos: { [key: string]: string } = {
    Sunny: sunnyLogo,
    Clear: starMoonLogo,
    "Partly cloudy": windSunnyLogo,
    rainNight: rainNightLogo,
    Cloudy: cloudyLogo,
    Overcast: cloudyLogo,
    Mist: windCloudyLogo,
    Fog: windCloudyLogo,
    "Patchy rain possible": cloudyRainLogo,
    "Light rain": rainLogo,
    "Moderate rain": cloudyRainLogo,
    "Heavy rain": rainLogo,
    "Light drizzle": cloudyRainLogo,
    "Moderate or heavy rain with thunder": thunderStormLogo,
    Thunderstorm: thunderStormLogo,
    "Blowing snow": windNightLogo,
    Snow: windNightLogo,
    Windy: windSunnyLogo,
    default: windSunnyLogo
};