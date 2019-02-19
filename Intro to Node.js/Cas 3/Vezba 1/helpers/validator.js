exports.validatePassword = function(password) {
    if(password.length >= 6) {
        return true;
    } else {
        return false;
    }
}

exports.validateEmail = function(email) {
    if(email.includes("@") && (email.endsWith('yahoo.com') || email.endsWith('gmail.com'))) {
        return true;
    } else {
        return false;
    }
}