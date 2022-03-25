import { homedir } from "os";
import {
  join,
  basename,
  dirname,
  extname,
  relative,
  isAbsolute,
  resolve,
  sep,
} from "path";
import { writeFile, promises } from "fs";

const filePath = join(homedir(), "weather-data.json");
const TOKEN_DICT = {
  token:'token',
  city: 'city'
}

const saveKeyValue = async (key, value) => {
  let data = {};
  
  if (await isExist(filePath)) {
    const file = await promises.readFile(filePath)
    data = JSON.parse(file)
    // console.log('file >', file)
  }
  
  data[key] = value;
  await promises.writeFile(filePath,JSON.stringify(data) );
};

const getKeyValue = async (key) =>{
  if (await isExist(filePath)) {
    let file = await promises.readFile(filePath);
    let data = JSON.parse(file);
    return data[key];
  }
  return undefined;
}

const isExist = async (path) => {
  try {
    await promises.stat //стат возвращает статистику на наличие файла выдает ошибку
    return true;
  } catch (error) {
    return false; 
  }
};

export { saveKeyValue, getKeyValue, TOKEN_DICT };

// console.log("filepath:", filePath);
//   console.log("basename:", basename(filePath));
//   console.log("dirname", dirname(filePath));
//   console.log("extname", extname(filePath));
//   console.log("isabsolute::boolean:", isAbsolute(filePath));
//   console.log("relative", relative(filePath, dirname(filePath)));
//   console.log("resolve", resolve('../..'));
//   console.log("resolve", resolve('.'));
//   console.log("separator", sep);
  // writeFile('sdf', {}, {}, ()=>{});
  // 