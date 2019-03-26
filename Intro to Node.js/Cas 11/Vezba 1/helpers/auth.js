// proverka dali nekoj user e logiran
exports.isLogged = function(req, res, next) {
    if(req.session.email) {
        next();
    } else {
        res.redirect("/login");
    }

}

// proverka dali se raboti za administrator
exports.isAdmin = function(req, res, next) {
    if(req.session.type === "admin") {
        next();
    } else {
        res.redirect('/user');
    }
}