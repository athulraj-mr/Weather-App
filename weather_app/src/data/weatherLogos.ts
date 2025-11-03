import cloudyRainLogo from '../assets/image/logos/cloudy-rain.png'
import cloudyLogo from '../assets/image/logos/cloudy.png'
import rainNightLogo from '../assets/image/logos/rain-night.png'
import rainLogo from '../assets/image/logos/rain.png'
import starMoonLogo from '../assets/image/logos/star-moon.png'
import sunnyLogo from '../assets/image/logos/sunny.png'
import thunderStormLogo from '../assets/image/logos/thunderstorm.png'
import windNightLogo from '../assets/image/logos/wind-night.png'
import windSunnyLogo from '../assets/image/logos/wind-sunny.png'
import windCloudyLogo from '../assets/image/logos/windy-cloud.png'

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