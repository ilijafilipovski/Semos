var movie = require("../models/filmovi");

var getAll = (req,res) => {
    movie.getMovies()
    .then((data) => {
        return res.status(200).send(data);
    })
    .catch(err => {
        console.error(err);
        return res.status(500).send('ISE');
    })

}

var getOne = (req,res) => {
    if(req.params.id != undefined && req.params.id != ""){
    movie.getSingleMovie(req.params.id)
    .then(data => {
        return res.status(200).send(data)
    })
    .catch(err => {
        console.error(err);
        return res.status(500).send("ISE")
    })
}
    return res.status(500).send("ISE")
}

var addOne = (req,res) => {
    movie.addMovie(req.body)
    .then(() => {
        return res.status(201).send("OK");
    })
    .catch(err => {
        console.error(err);
        res.status(500).send("ISE");
    })

}

var removeOne = (req,res) => {
    if(req.params.id != undefined && req.params.id != ""){
        movie.removeMovie(req.params.id)
        .then(()=>{
            return res.status(200).send("deleted")
        })
        .catch(err => {
            console.error(err);
            return res.status(500).send("ISE");
        })
    }
    return res.status(500).send("ISE");

}

var updateOne = (req,res) => {
    let valide = req.body.title != undefined
    && req.body.producer != undefined
    && req.body.releaseDate != undefined
    && req.body.producer != ""
    && req.body.releaseDate != ""
    && req.body.title != "";
    if(req.params.id != undefined && req.params.id != ""){
        if(valide){
    movie.updateMovie(req.params.id, req.body)
    .then(() => {
        return res.status(200).send("ok");
    })
    .catch(err => {
        console.error(err);
        return res.status(500).send("ISE");

    })
}
    return res.status(500).send("ISE");
}
    return res.status(500).send("ISE");
}

var patchOne = (req,res) => {
    let valide = req.body.title != undefined
    || req.body.producer != undefined
    || req.body.releaseDate != undefined
    || req.body.producer != ""
    || req.body.releaseDate != ""
    || req.body.title != "";
    if(req.params.id != undefined && req.params.id != ""){
        if(valide){
    movie.updateMovie(req.params.id, req.body)
    .then(() => {
        return res.status(200).send("ok");
    })
    .catch(err => {
        console.error(err);
        return res.status(500).send("ISE");

    })
}
    return res.status(500).send("ISE");
}
    return res.status(500).send("ISE");
}

module.exports = {
    getAll,
    getOne,
    addOne,
    removeOne,
    updateOne,
    patchOne
}