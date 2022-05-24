const fs = require('node:fs');
const path = require('path');
const _path = path.join(__dirname,'./text.txt');
const rr = fs.createReadStream(_path);

rr.on('data', (data) => {
    console.log(`${data}`);
})