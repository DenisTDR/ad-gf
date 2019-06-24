
switch (process.argv[2]) {
    case "mariadb":
        const {executeMariaDbQueries} = require("./queries/mariadb-queries");
        executeMariaDbQueries().then(() => {
            console.log('done');
        }).catch(e => {
            console.error(e);
        });
        break;
    case "mongodb":
        const {executeMongoDBQueries} = require("./queries/mongodb-queries");

        executeMongoDBQueries().then(() => {
            console.log('done');
        }).catch(e => {
            console.error(e);
        });
        break;
    default:
        console.log("invalid option");
}
