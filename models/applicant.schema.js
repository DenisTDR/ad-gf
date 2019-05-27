const mongoose = require("mongoose");

const applicantSchema = new mongoose.Schema({
    id: Number,
    birthDate: Date,
});

const Applicant = mongoose.model('Applicant', applicantSchema);
module.exports = {Applicant};
