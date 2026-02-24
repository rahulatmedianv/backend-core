const http = require('http');


http.createServer((req, res) => {
    console.log('App is runnin on port 3000')
    res.end('Hello')
}).listen(3000);


