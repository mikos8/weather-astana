import chalk from "chalk";
import dedent from "dedent-js";

const printError = (error) => {
  console.log(chalk.bgRed(" error: "), error);
};

const printSucces = (message) => {
  console.log(chalk.bgGreen(" SUCCESS: "), message);
};

const printHelp = () => {
  console.log(
    dedent`${chalk.bgCyan("               HELP               ")}
     без параметров - вывод погоды
     -s [city] для установки города
    `
  );
  console.log(chalk.bgCyan('                                  '))
};

const printWeather = (res, icon)=>{
  console.log(chalk.bgYellow(`        ${res.name}   weather:        `))
  console.log(
    dedent`${chalk.bgMagentaBright("                            ")}
     ${icon}  ${res.description} 
    `
  );
  console.log(chalk.bgCyan('                                  '))
}

export { printError, printSucces, printHelp, printWeather };
