const http = require('http');

var unusedChars = ''
var token = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoic2FudGE2NjYiLCJwbGF0aW51bSI6dHJ1ZX0sImV4cCI6MTU3NjA1NjA5Ni41OTgwMDAwMDB9.U-T46JTYgKUJzUgBWU-_PxmVH-RH-giK0Db5Nbda5v8'

var jsonData = {}

function testToken(pos=0) {
    let currentChar = token.substr(pos,1)
    token=token.substring(0,pos)+'*'+token.substring(pos+1)
    http.get(`http://whale.hacking-lab.com:10101/fsja/random?token=${token}`, (response) => {
        let body = '';

        // called when a data chunk is received.
        response.on('data', (chunk) => {
            body += chunk;
        });

        // called when the complete response is received.
        response.on('end', () => {
            jsonData = JSON.parse(body)
            if (jsonData.errorCode) {
                token=token.substring(0,pos)+currentChar+token.substring(pos+1)
            }
            else {
                console.log("OK", token)
                unusedChars = unusedChars + currentChar
            }
            pos++
            if (pos < token.length) {
                testToken(pos)
            }
            else {
                console.log(unusedChars)
            }
        });

    }).on("error", (error) => {
        console.log("Error: " + error.message);
    });

}

testToken()