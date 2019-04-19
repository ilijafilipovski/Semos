const moviesModel = require('../models/movies')
const validator = require('node-input-validator');
const validatorSchema = require('../validator/movie');


var getAll = (req,res) => {
    moviesModel.getAllMovies()
    .then(data => {
        return res.status(200).send(data)
    })
    .catch(err => {
        console.error(err);
        return res.status(500).send("ISE");
    })

}

var getOne = (req,res) => {
    if(req.params.id != undefined && req.params.id != ""){
        moviesModel.getOneMovies(req.params.id)
        .then(data => {
            return res.status(200).send(data);
        })
        .catch(err => {
            console.error(err);
            return res.status(500).send("ISE");
        })
    } else {
        return res.status(500).send("ISE")
    }

}

var addOne = (req,res) => {
    var v = new validator(req.body, validatorSchema.addMovie)
    v.check()
    .then(matched => {
        if(matched){
            return moviesModel.addSingleMovie(req.body)
        } else {
            throw new Error("Validation failed");
        }
    })
    .then(() => {
        return res.status(200).send("ok");
    })
    .catch(err => {
        console.error(err);
        return res.status(500).send("ISE")
    })
}


var deleteOne = (req,res) => {
    if(req.params.id != undefined && req.params.id != ""){
        moviesModel.removeSingleMovie(req.params.id)
        .then(() => {
            return res.status(200).send("ok");
        })
        .catch(err => {
            console.error(err);
            return res.status(500).send("ISE")
        })
    } else {
        return res.status(500).send("ISE")
    }
}

var putOne = (req,res) => {
    var v = new validator(req.body, validatorSchema.addMovie)
    if(req.params.id != undefined && req.params.id != ""){
        v.check()
        .then(matched => {
            if(matched){
                moviesModel.updateMovie(req.params.id, req.body)
                .then(()=> {
                    return res.status(200).send("ok");
                })
                .catch(err => {
                    console.error(err);
                    return res.status(500).send("ISE");
                })
            } else {
                throw new Error("Validation vailed");
            }
        })
    } else {
        return res.status(500).send("ISE");
    }
}

var patchOne = (req,res) => {
    var valid = req.body.title != undefined
    || req.body.producer != undefined 
    || req.body.year != undefined;
    
    if(req.params.id != undefined && req.params.id != ""){
        if(valid){
            moviesModel.updateMovie(req.params.id, req.body)
            .then(()=>{
                return res.status(200).send("ok");
            })
            .catch(err => {
                console.error(err);
                return res.status(500).send("ISE");
            })
        } else {
            res.status(500).send("ISE");
        }
    } else {
        return res.status(500).send("ISE")
    }

}


module.exports = {
    getAll,
    getOne,
    addOne,
    deleteOne,
    putOne,
    patchOne
}