const mongoose = require('mongoose');

const dbParams = {
    host: "127.0.0.1",
    port: "27017",
    username: "",
    password: "",
    db: "movies"


}

var init = () => {
    mongoose.connect(`mongodb://${dbParams.host}:${dbParams.port}/${dbParams.db}`, {useNewUrlParser: true}
    )
    .then(() => {
        console.log("MongoDB started");
    })
    .catch(err => {
        console.error(err);
    })
}

module.exports = {
    init
}