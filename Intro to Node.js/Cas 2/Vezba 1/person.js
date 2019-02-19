exports.create = function(fn, ln, age, gender) {
    this.fn = fn;
    this.ln = ln;
    this.age = age;
    this.gender = gender;
}

exports.create.prototype.getFullName = function(){
    return this.fn + " " + this.ln;
}