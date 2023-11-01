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
  const myCity = req.query;

  const weatherFilter = data.filter((city) => {
    return myCity.city === city.city_name;
  });

  const wrangledData = weatherFilter[0].data;

  wrangledData.map;

  res.json(wrangledData);
});

// Last line of code
app.listen(PORT, () => console.log(`App is running PORT ${PORT}`));
