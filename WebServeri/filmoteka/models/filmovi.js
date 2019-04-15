const mongoose = require('mongoose');

var movie = mongoose.model(
    'movies',
    new mongoose.Schema({
        title: String,
        producer: String,
        releaseDate: Number
    })
)

var getMovies = () => {
    return new Promise((success, fail) => {
        movie.find({}, (err, data) => {
            if(err){
                return fail(err);
            }
            return success(data);
        })
    })
}

var getSingleMovie = (id) => {
    return new Promise((success, fail) => {
        movie.findOne({_id:id}, (err, data) => {
            if(err){
                return fail(err);
            }
            return success(data);
        })
    })
}

var addMovie = (data) => {
    return new Promise((success, fail) => {
        var m = new movie(data);
        m.save(err => {
            if (err){
                return fail(err);
            }
            
            return success();
        })
    })
}

var removeMovie = (id) => {
    return new Promise((success, fail) => {
        movie.deleteOne({_id: id}, (err) => {
            if(err){
                return fail(err);
            }
            return success();
        })
    })
}

var updateMovie = (id, data) => {
    return new Promise((success, fail) =>{
        movie.updateOne({_id:id}, data, err => {
            if(err){
                return fail(err);
            }
            return success();
        })
    })
}

module.exports = {
    getMovies,
    getSingleMovie,
    addMovie,
    removeMovie,
    updateMovie
}