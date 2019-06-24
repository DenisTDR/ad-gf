const mongoose = require("mongoose");
const {ParticipantInfo} = require("../models/participant-info.schema");
const {Applicant} = require("../models/applicant.schema");
const {mongodbUrl} = require("../config/config");

const options = {useNewUrlParser: true};

async function connect() {
    await mongoose.connect(mongodbUrl, options, (err => {
        if (err) {
            console.error("can't connect to mongo");
            console.error(err.message);
            process.exit(-1);
            return;
        }
        console.log("connected to MongoDB");
    }));
};

async function disconnect() {
    await mongoose.disconnect();
}

module.exports = {
    connect,
    disconnect,
    Applicant,
    ParticipantInfo
};
