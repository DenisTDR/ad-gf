const mongodb = require("./connectors/mongodb");
const mariadbConnect = require("./connectors/mariadbConnect");


async function migrateData() {
    const mariaDbConnection = await mariadbConnect.connect();
    await mongodb.connect();


}

migrateData().then(() => {
   console.log("Done ...");
});
