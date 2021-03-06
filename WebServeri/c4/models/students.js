var mongoose = require('mongoose');

var student = mongoose.model(
    'students',
    new mongoose.Schema({
        first_name: String,
        last_name: String,
        gpa: Number
    })
);

var addStudent = (data) => {
    return new Promise((success, fail) => {
        var s = new student(data);
        s.save(err => {
            if(err){
                return fail(err);
            }
            return success();
        });
    });
};

var getAllStudents = () => {
    return new Promise((success, fail) => {
        student.find({}, (err, data) => {
            if(err == null){
                return success(data);
            }
            return fail(err);
        });
    });
}

var getSingleStudent = (id) => {
    return new Promise((success, fail) => {
        student.findOne({_id: id}, (err, data) => {
            if(err){
                return fail(err);
            }
            return success(data);
        });
    });
}

var deleteStudent = (id) => {
    return new Promise((success, fail) => {
        student.deleteOne({_id: id}, err => {
            if(err){
                return fail(err);
            }
            return success();
        });
    });
}

var updateStudent = (id, data) => {
    return new Promise((success, fail) => {
        student.updateOne({_id: id}, data, err => {
            if(err) {
                return fail(err);
            }
            return success();
        });
    });
}

module.exports = {
    addStudent,
    getAllStudents,
    getSingleStudent,
    deleteStudent,
    updateStudent
};
