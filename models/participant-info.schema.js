const mongoose = require("mongoose");

const participantInfo = new mongoose.Schema({
    id: Number,
    birthDate: Date,
});

const ParticipantInfo = mongoose.model('ParticipantInfo', participantInfo);
module.exports = {ParticipantInfo};

