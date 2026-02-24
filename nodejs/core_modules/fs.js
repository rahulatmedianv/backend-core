const fs = require('node:fs');
const path = require('path');

const FILE_PATH = path.join(__dirname, 'text.txt');
const ENCODING = 'utf-8'

function readFile() {
    const fileText = fs.readFileSync(FILE_PATH, ENCODING);
    console.log({fileText});
}

function writeFile(updatedText){
    fs.writeFileSync(FILE_PATH, updatedText, (err) => {
    if(err) {
        console.log({err});
    }else {
        console.log('File written successfully.');
    }
})
}


writeFile('Hello there');
readFile();