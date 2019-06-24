const mongoose = require("mongoose");

const participantInfoSchema = new mongoose.Schema({
    Id: {type: Number, index: true},
    FoodPreference: {type: Number, index: true}

}, {strict: false});

// const ParticipantInfo = mongoose.model('ParticipantInfo', participantInfoSchema);
module.exports = {
    // ParticipantInfo,
    participantInfoSchema
};

