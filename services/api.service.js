import https from "https";
import axios from "axios";
import { getKeyValue, TOKEN_DICT } from "./storage.service.js";

const getWeather = async (city) => {
  const token = await getKeyValue(TOKEN_DICT.token);
  if (!token) {
    throw new Error(
      "не задан ключ api, задайте его через команду -t [API_KEY]"
    );
  }
  const url = `https://api.openweathermap.org/data/2.5/forecast?id=524901`;//?id=524901&appid=acf504131b3e0af4fa731771c7cd32b3
//   const url = new URL("api.openweathermap.org/data/2.5/forecast");
//   url.searchParams.append("appId", token);
//   url.searchParams.append("id", "524901");
  // url.searchParams.append("city", city);
  // https.get(url, (response) => {
  //   let res = "";
  //   response.on("data", (chunk) => {
  //     res += chunk;
  //   });
  //   response.on("end", () => {
  //     console.log(res);
  //   });
  // });

  const { data } =  await axios.get(url, { 
      params: {
        q: city,
        appId:'acf504131b3e0af4fa731771c7cd32b3',
        lang: 'ru',
        units: 'metric '
      }
  })
  // console.log('data>', data)
  data.list.forEach(element => {
    // console.log(' >',element.weather)
  });
  return data.list[0]
};

export { getWeather };
