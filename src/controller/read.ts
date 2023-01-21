const readLine = require('readline');
const fs=require('fs');
const { resolveMx } = require('dns');
const readable = fs.createReadStream('/home/ajusten/Documentos/Development/spcciRemote/electron-vite-react/public/marktsin.tx');

const rl=readLine.createInterface({

    input: readable,
    // output: process.stdout
});
const arrayMarkts=[];
rl.on('line', (line)=>{
    arrayMarkts.push(line);
});

export {arrayMarkts}