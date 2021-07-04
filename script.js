#!/usr/bin/env node
const { promisify } = require('util');
const exec = promisify(require('child_process').exec)

const initGit = async () => {
  await exec('git init');
  await exec('npx husky install');
  await exec('git add .');
  await exec('git commit -m "feature/initial-commit"');
}
initGit();

const FgGreen = "\x1b[32m";
const FgYellow = "\x1b[33m";
const FgBlue = "\x1b[34m";
const FgMagenta = "\x1b[35m";
const FgCyan = "\x1b[36m";

console.log(`${FgYellow}\nWelcome to`, `${FgMagenta}codempire-react-native-template\n`);
console.log(`${FgYellow}Created and powered by:\n`);

console.log(`${FgCyan}     ####################  ###############################  ####################`);
         console.log("    ###''''##''''####''''  ###''''###'#'''#'''###''''''#######'#'''##''''###### ");
         console.log("   ###  ####  ##  ##  ###  ##  ##  ##  ##  ##  ##  ###  ##  ##  ####  ##  ####  ");
         console.log("  ####  ####  ##  ##  ###  ##  ######  ##  ##  ##  ###  ##  ##  ####  #######   ");
         console.log(" ######....##....####......###....###..##..##..##  ....###..##..#####....###    ");
         console.log("#################################################  ########################     ");

console.log(`\n${FgYellow}Template contains:\n`);
console.log(`${FgGreen}1. Default project structure`);
console.log("2. Some configured libraries");
console.log("3. Prettier & ESLint configs");
console.log(`4. New package.json scripts (${FgBlue}clean-up${FgGreen}, ${FgBlue}pre-commit${FgGreen})`);
console.log(`5. Reusable services (${FgBlue}redux${FgGreen}, ${FgBlue}api-service${FgGreen}, ${FgBlue}translate-service${FgGreen})`);
console.log(`6. CI/CD sripts`);
console.log(`7. And much much more!`);
