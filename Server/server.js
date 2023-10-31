require("dotenv").config();

const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 8080;
const app = express();
const data = require("./Data/weather.json");

app.use(cors());

// add your endpoints here
app.get("/", (req, res) => {
  return res.json("You are looking at the home page");
});

app.get("/weather", (req, res) => {
  const myLat = req.query.lat;
  const myLon = req.query.lon;

  const weatherFilter = data.filter((city) => {
    console.log(city.lat);
    return myLat === city.lat && myLon === city.lon;
  });

  console.log(weatherFilter);
  // res.json(weatherFilter.data[0].weather.description);
});

// Last line of code
app.listen(PORT, () => console.log(`App is running PORT ${PORT}`));
