const readline = require("readline");
const https = require("https"); // fetch ऐवजी https वापरलं

const API_KEY = '2226db6bd69177c99cf6f3c6c945c4b6';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const getWeather = (city) => {
  const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;

  https.get(url, (res) => {
    let data = '';

    // response डेटा गोळा करतो
    res.on('data', (chunk) => {
      data += chunk;
    });

    // सगळा डेटा मिळाल्यावर parse करून दाखवतो
    res.on('end', () => {
      const weatherData = JSON.parse(data);
      if (weatherData.cod !== 200) {
        console.log("❌ City not found.");
        return;
      }

      console.log(`\n🌤️ Weather in ${weatherData.name}`);
      console.log(`🌡️ Temperature: ${weatherData.main.temp}°C`);
      console.log(`🌥️ Condition: ${weatherData.weather[0].description}`);
    });

  }).on('error', (err) => {
    console.error("❌ Error fetching weather:", err.message);
  });
};

rl.question("\nEnter a city name to get its weather: ", (city) => {
  getWeather(city.trim());
  rl.close();
});
