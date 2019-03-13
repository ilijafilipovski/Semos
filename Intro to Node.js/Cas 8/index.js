const express = require("express");
const app = express();
const myParser = require('body-parser');
const port = 3000; 
const session = require("express-session");
const auth = require("./helpers/auth");

app.set("view engine", "ejs");
app.use(myParser.urlencoded({extended: true}));
app.use(session({
	secret: "hello semos",
	expires: 1000*60*20
}))


app.listen(port, (err) =>{
	console.log("Server started");
});


app.get("/", (req, res) =>{
	let myName = "Iva";

	res.render("index", {name: myName});
})



app.get("/login", (req, res)=>{
	res.render("login");
})

app.post("/login", auth.isEmail ,(req, res) =>{
	let email = req.body.email;
	let password = req.body.pass;
	console.log(email);
	console.log(password);

	req.session.username = email;

	//console.log(sess.username);

	res.send("Logged in");

});

app.get('/myProfile', (req, res)=>{
	if(req.session.username){
		res.send("Welcome to profile page");
	}
	else{
		res.redirect("/login");
	}

})

app.get("/myProfile", auth.isLogged, (req, res)=>{
	res.send("Welcome to profile page");
})

//--------------------------------------------------------------------------------------


app.get("/age", auth.isAllowed, (req, res) =>{
	res.send("Welcome to age page");
})