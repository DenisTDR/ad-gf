const express = require('express');
const app = express();

const mongodbConnect = require('./mongodbConnect');
// const {Applicant} = require("./models/applicant.schema");
const {appPort} = require("./constants");

mongodbConnect(async () => {
    // console.log('created schema?');
    // const testApplicant = new Applicant({name: 'john smith'});
    // await testApplicant.save();
});
app.get('/', (req, res) => res.send('Hello World!'));

app.listen(appPort, () => console.log(`App listening on port ${appPort}!`));


