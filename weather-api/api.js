// https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
// https://maps.googleapis.com/maps/api/geocode/json?address=YOUR_ZIP&key=YOUR_API_KEY

import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

export const getRequest = async (route, paramObject) => {
  let config = {
    params: paramObject,
  };
  return axios
    .get(route, config)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      return error.data;
    });
};

export const getWeatherForZIP = async (zip) => {
  const getCoordsReq = await getRequest(
    "https://maps.googleapis.com/maps/api/geocode/json",
    {
      address: zip,
      key: process.env.GOOGLE_API_KEY,
    }
  );
  //console.log(getCoordsReq);
  const latitude = getCoordsReq.results[0].geometry.location.lat;
  const longitude = getCoordsReq.results[0].geometry.location.lng;
  //console.log({ latitude, longitude });
  const weatherDataReq = await getRequest(
    "https://api.openweathermap.org/data/2.5/onecall",
    {
      lat: latitude,
      lon: longitude,
      exclude: "minutely",
      appid: process.env.WEATHER_API_KEY,
      units: "imperial",
    }
  );
  return weatherDataReq.daily[0];
};
