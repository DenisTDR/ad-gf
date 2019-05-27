const mongoose = require("mongoose");
const {mongodbUrl} = require("./constants");

const options = {useNewUrlParser: true};
const mongodbConnect = (callback) => {
    mongoose.connect(mongodbUrl, options, (err => {
        if (err) {
            console.error("can't connect to mongo");
            console.error(err.message);
            process.exit(-1);
            return;
        }
        console.log("connected to MongoDB");

        if (typeof callback === 'function') {
            callback();
        }
    }));
};

module.exports = mongodbConnect;
