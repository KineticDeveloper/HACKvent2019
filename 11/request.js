const http = require('http');

var requestCount = 0

var token = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoic2FudGE2NjYiLCJwbGF0aW51bSI6dHJ1ZX0sImV4cCI6MTU3NjAyNjY0OC42MTIwMDAwMDB9.XYnELIFYPl8hkvmSTWVMAZ9TzlTFKcAs3bFzXK54StM'
var jokes = new Set();

function getJoke() {

    http.get(`http://whale.hacking-lab.com:10101/fsja/random?token=${token}`, (response) => {
        let body = '';

        // called when a data chunk is received.
        response.on('data', (chunk) => {
            body += chunk;
        });

        // called when the complete response is received.
        response.on('end', () => {
            requestCount++;
            var info = JSON.parse(body)
            if (!jokes.has(info.joke)) {
                console.log(jokes.size,requestCount,info)
                jokes.add(info.joke)
            }
            if (info.platinum != true) {
                getJoke()
            }
            else {
                console.log(`Finished after ${requestCount} requests.`)
            }
        });

    }).on("error", (error) => {
        console.log("Error: " + error.message);
    });
}

getJoke()