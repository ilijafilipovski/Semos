exports.validatePassword = function(password){
    if(password.length>=6){
        return true;
    }

    return false;
}

exports.validateEmail = function(email){
    if(email.includes("@") && (email.endsWith("gmail.com") || email.endsWith("yahoo.com"))){
        return true;
    }
    return false;
}