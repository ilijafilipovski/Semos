const fs = require("fs");
const http = require('http');
const url = require('url');

http.createServer((request, response) => {
    fs.readFile("users.json", "utf-8", (error, data) => {
        if(error){
            throw error;
        }
        else{
            var name = "";
            var parsedJSON = JSON.parse(data);
            for(let i=0; i<parsedJSON.length; i++){
                name += parsedJSON[i].name + " ";
            }
            if(request.url==="/home"){
                response.writeHead(200, "OK");
                response.write("Home page");
                response.end();
            }
            else{
                response.writeHead(200, "OK");
                response.write(name);
                response.end();
            }
        }
    })
}).listen(3000);