const fs = require('node:fs');
const path = require('path');
const EventEmitter = require('events');
const _path = path.join(__dirname,'./text.txt');
const rr = fs.createReadStream(_path);

class MyEmitter extends EventEmitter {};

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
    console.log(`${rr.read()}`);
});

rr.on('readable', () => {
    myEmitter.emit('event');
});
rr.on('end', () => {
    console.log('end');
});
/*rr.on('readable', () => {
    console.log(`${rr.read()}`);
});
rr.on('data', (chunk) => {
  console.log(`Received ${chunk.length} bytes of data.`);
});
rr.on('end', () => {
    console.log('end');
});
*/