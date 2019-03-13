exports.isAllowed = function(req, res, next){
	let age = req.query.age;

	if(age > 16){
		next();
	}
	else{
		res.send("Page not allowed");
	}
}


exports.isLogged = function(req, res, next){
	if(req.session.username){
		next();
	}
	else{
		res.redirect("/login");
	}
}

exports.isEmail = function(req, res, next){
	let email = req.body.email;

	if(email.includes("@") && email.endsWith(".com")){
		next();
	}
	else{
		res.send("Email not valid");
	}
}