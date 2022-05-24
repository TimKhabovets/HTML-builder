const path = require('path');
const fs = require('node:fs');
const process = require("process");
const _path = path.join(__dirname,'./text.txt');
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });


fs.writeFile(_path,'', (err) => {
  if (err) {
    throw err;
  };
});

const write_text = () =>{
  console.log('enter text:');
};
write_text();

rl.on('line', (data) => {
  if(data.toLowerCase() === "exit"){
    process.exit();
  } else {
    write_text();
    fs.appendFile(_path, `${data}\n`, (err) => {
      if (err) {
        throw err;
      };
    });
  };
});
process.on("exit", () => {
  console.log('completion.');
});