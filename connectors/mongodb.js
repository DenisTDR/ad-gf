const mongoose = require("mongoose");
const {ParticipantInfo} = require("../models/participant-info.schema");
const {Applicant} = require("../models/applicant.schema");
const {mongodbUrl} = require("../constants");

const options = {useNewUrlParser: true};
const connect = async (callback) => {
    await mongoose.connect(mongodbUrl, options, (err => {
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

module.exports = {
    connect: connect,
    Applicant: Applicant,
    ParticipantInfo: ParticipantInfo
};
