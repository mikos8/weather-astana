#!/usr/bin/env node
import { getArgs } from "./helper/args.js";
import { getWeather } from "./services/api.service.js";
import { printError, printHelp, printSucces, printWeather } from "./services/log.service.js";
import { saveKeyValue, TOKEN_DICT } from "./services/storage.service.js";

const saveToken = async (token) => {
  if (!token.length) {
    printError("не передан токен");
    return;
  }

  try {
    await saveKeyValue(TOKEN_DICT.token, args.t);
    printSucces("#token save.");
  } catch (error) {
    printError(error.message);
    console.log("- **");
  }
};

const saveCity = async (city) =>{
  if (!city.length){
    printError('не задан город');
    return;
  }
  
  try {
    await  saveKeyValue(TOKEN_DICT.city, args.c);
    printSucces('#city save.')
  } catch (error) {
    printError(error.message);
  }
}

const getForcast = async () => {
  try {
    const data = await getWeather(process.env.CITY);
    console.log('weather >', data.weather)
    printWeather(data.weather[0],data.weather[0].icon)
  } catch (e) {
    if (e?.response?.status == 404) {
      printError('неверно указан город')
    }else if (e?.response?.status == 401) {
      printError('Неверно указан токен')
    }else {
      printError(e.message)
    }
  }
};

const initCLI = () => {
  console.log("env >", process.env);
  const args = getArgs(process.argv);
  console.log("start args>", args);
  console.log("args.t>", args.t);

  if (args.h) {
    printHelp();
  }

  if (args.s) {
    saveCity(args.s);
  }

  if (args.t) {
    return saveToken(args.t); // возвращаем промис который делает внутри себя сохранение
  }
  getForcast();
  // getWeather('moscow');
};

initCLI();

// http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={API key}
