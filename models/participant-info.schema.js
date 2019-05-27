const mongoose = require("mongoose");
const participantInfo = new mongoose.Schema({
    name: String
});

const ParticipantInfo = mongoose.model('ParticipantInfo', participantInfo);
module.exports = {ParticipantInfo};
