const mongoose = require("mongoose");
const {participantInfoSchema} = require("./participant-info.schema");

const applicantSchema = new mongoose.Schema({
    Id: {type: Number, index: true},
    BirthDate: {type: Date, index: true},
    Gender: {type: Number, index: true},
    Info: participantInfoSchema
}, { strict: false });

const Applicant = mongoose.model('Applicant', applicantSchema);
module.exports = {Applicant, applicantSchema};
