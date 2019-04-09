const express = require('express');
var students = require('./handlers/students');
var bodyParser = require('body-parser')

var api = express();
const port = 8080;
api.use(bodyParser.json());

api.get("/students", students.getAll );
api.get('/students/:id', students.getOne );
api.post('/students', students.add);
api.delete('/students/:id', students.remove);
api.put('/students/:id', students.update);
api.patch('/students/:id', students.patch);

api.listen(port, err => {
    if(err){
        return console.log("Error starting service %s", err);
    }
    return console.log('Server started on port: ' + port);
})