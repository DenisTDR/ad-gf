const mongoose = require("mongoose");

const participantInfoSchema = new mongoose.Schema({
    Id: {type: Number, index: true},
    FoodPreference: {type: Number, index: true},
    BirthDate: {type: Date, index: true},
    PassportExpiry: {type: Date, index: true},
    Created: {type: Date, index: true},
    Updated: {type: Date, index: true}

}, {strict: false});

// const ParticipantInfo = mongoose.model('ParticipantInfo', participantInfoSchema);
module.exports = {
    // ParticipantInfo,
    participantInfoSchema
};

