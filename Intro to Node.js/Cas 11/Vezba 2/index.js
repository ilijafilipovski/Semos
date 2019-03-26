const express = require('express')
const app = express()
const fetch = require('node-fetch')
const port = 3000

app.set('view engine', 'ejs')

app.listen(port, () => { console.log("Our local server is running on port: " + port)})

app.get('/', (req, res) => {
    fetch('https://ghibliapi.herokuapp.com/films')
    .then(res => res.json())
    .then(json => {
        res.render('index', { movies: json})
    })
})

app.get('/movieDetails', (req, res) => {
    let title = req.query.title
    fetch('https://ghibliapi.herokuapp.com/films')
    .then(res => res.json())
    .then(json => {
        for( let i = 0 ; i < json.length ; i++) {
            if(json[i].title && json[i].title === title) {
                res.render("movieDetails", {film : json[i]})
            }
        }
    })
})