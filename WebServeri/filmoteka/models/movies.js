const mongoose = require('mongoose');

var movie = mongoose.model(
    "movies",
    new mongoose.Schema({
        title: String,
        producer: String,
        year: Number
    })
);

var addSingleMovie = (data) => {
    return new Promise((success, fail) => {
        var m = new movie(data);
        m.save(err => {
            if(err){
                return fail(err);
            }
           return success();
        });
    });
}

var removeSingleMovie = (id) => {
    return new Promise((success, fail) => {
        movie.deleteOne({_id: id}, err => {
            if(err){
                return fail(err)
            } else {
                return success();
           }
        });
    });
};

var getAllMovies = () => {
    return new Promise((success, fail) => {
        movie.find({}, (err, data) => {
            if(err){
                return fail(err);
            } else {
                return success(data);
            }
        })
    })
}

var getOneMovies = (id) => {
    return new Promise((success, fail) => {
        movie.find({_id:id}, (err, data) => {
            if(err){
                return fail(err);
            } else {
                return success(data);
            }
        })
    })
}

var updateMovie = (id, data) => {
    return new Promise((success, fail) => {
        movie.updateOne({_id:id}, data, err => {
            if(err){
                return fail(err)
            } else {
                return success();
            }
        })
    })
}
module.exports = {
    addSingleMovie,
    removeSingleMovie,
    getAllMovies,
    getOneMovies,
    updateMovie
}