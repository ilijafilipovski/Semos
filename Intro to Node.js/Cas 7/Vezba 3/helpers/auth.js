exports.isAdmin = function(req, res, next) {
    console.log(req.session.type)
    if(req.session.type === "admin") {
        next();
    } else {
        //res.send("error")
        res.redirect("/")
    }
}