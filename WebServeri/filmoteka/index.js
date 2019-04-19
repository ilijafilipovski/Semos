const express = require('express');
const api = express();
const mongo = require('./db/mongo');
const movies = require('./handlers/movies')
const bodyParser = require('body-parser');

api.use(bodyParser.json());
mongo.init();

api.get("/movies", movies.getAll);
api.get("/movies/:id", movies.getOne);
api.post("/movies", movies.addOne);
api.delete("/movies/:id", movies.deleteOne);
api.put("/movies/:id", movies.putOne);
api.patch("/movies/:id", movies.patchOne);

api.listen(8080, err => {
    if(err){
        return console.error(err);
    }
    else {
        console.log('Server started on port 8080');
    }
})