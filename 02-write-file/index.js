const path = require('path');
const fs = require('node:fs');
const EventEmitter = require('events');
const _path = path.join(__dirname,'./text.txt');
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const { log } = require('console');
const rl = readline.createInterface({ input, output });
const rr = fs.createWriteStream(_path);


rl.question('What do you think about Kilian Mbappe? \n', (answer) => {
    rr.write(answer);
    rl.on('close', () => {
      console.log('Thanks for your answer');
    });
    rl.close();
});



