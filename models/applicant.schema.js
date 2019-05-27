const mongoose = require("mongoose");

const applicantSchema = new mongoose.Schema({
    email: String,
    facebook: String,
    phoneNumber: String,
    firstName: String,
    lastName: String,
    gender:
});

const Applicant = mongoose.model('Applicant', applicantSchema);
module.exports = {Applicant};
