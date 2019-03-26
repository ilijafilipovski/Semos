const express = require('express')
const app = express();
const fetch = require('node-fetch')
const myParser = require('body-parser')
const port = 3000;

app.use(myParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs');

// Starting local server
app.listen(port, () => { console.log("My local server is running on port " + port) });


app.get('/', (req, res) => {
    res.render("index");
})

app.post('/', (req, res) => {
    let team = req.body.team;
    console.log(team)
    fetch('https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=' + team)
        .then(res => res.json())
        .then(json => {
            if (json.teams === null) {
                res.render("error")
            } else {
                res.render('myChosenTeam', { team: json.teams[0] })
            }
        })
})

app.get('/allPlayers', (req, res) => {
    let team = req.query.team
    fetch('https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t=' + team)
        .then(res => res.json())
        .then(json => {
            if (json.player === null) {
                res.render("error")
            } else {
                res.render('allPlayers', { players: json.player })
            }
        })

})

