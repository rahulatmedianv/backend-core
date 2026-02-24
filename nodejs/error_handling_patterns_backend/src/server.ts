import express from 'express';

const app = express();
const PORT = 8080;

app.listen(PORT, (err) => {
    if(err) {
        process.exit(1);
    }
    console.log('App is running on port', PORT);
})