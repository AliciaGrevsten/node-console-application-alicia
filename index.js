console.log("Choose an option: ");
console.log("1. Read package.json \n2. Display OS info \nStart HTTP server");

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('Type a number: ', (answer) => {

    if (answer.match(1)) {
        const fs = require('fs');

        fs.readFile(__dirname + '/package.json', 'utf-8', (err, content) => {
            console.log(content);
        })
    } else if (answer.match(2)) {
        const osLog = require('./osLogger');
        osLog();
    } else if (answer.match(3)) {
        const http = require('http');

        //const hostname = '127.0.0.1';
        const port = 3000;

        const server = http.createServer((req, res) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Hello World');
        });

        server.listen(port, () => {
            console.log(`Server running at http://localhost:${port}/`);
        });
    } else {
        console.log("Invalid input.");
    }
  rl.close();
});


