const express = require('express');
const mongodb = require("./connectors/mongodb");
const app = express();

// const {Applicant} = require("./models/applicant.schema");
const {appPort} = require("./constants");

mongodb.connect(async () => {
    // console.log('created schema?');
    // const testApplicant = new Applicant({name: 'john smith'});
    // await testApplicant.save();
// });

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(appPort, () => console.log(`App listening on port ${appPort}!`));
