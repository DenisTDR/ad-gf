const mongodb = require("./connectors/mongodb");
const mariadbConnect = require("./connectors/mariadbConnect");


async function migrateData() {
    const mariaDbConnection = await mariadbConnect.connect();
    await mongodb.connect();

    console.log('getting from mariadb');
    const participantInfos = await mariaDbConnection.query("SELECT * FROM ParticipantInfo;");

    const applicantsResult = await mariaDbConnection.query("SELECT * FROM Applicant;");

    console.log('saving to mongodb');

    for (const applicantObj of applicantsResult) {

        if (applicantObj.InfoId) {
            const info = participantInfos.find(pi => pi.Id === applicantObj.InfoId);
            delete info.Deleted;
            info.PassportNeedVisa = !!info.PassportNeedVisa[0];
            applicantObj.Info = info;
            delete applicantObj.InfoId;
        }
        delete applicantObj.Deleted;
        const applicantMongoModel = new mongodb.Applicant(applicantObj);

        await applicantMongoModel.save();
    }
    console.log('saved all');
    await mariaDbConnection.end();
    await mongodb.disconnect();
    await mariadbConnect.disconnect();
}

migrateData().then(() => {
    console.log("Done ...");
}).catch(err => {
    console.error(err);
});
