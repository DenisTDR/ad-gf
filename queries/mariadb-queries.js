const {connect, disconnect} = require("../connectors/mariadbConnect");

async function executeQueries() {
    const testCases = [
        {
            name: 'count all applicants',
            sql: 'SELECT COUNT(*) FROM Applicant INNER JOIN ParticipantInfo ON Applicant.InfoId=ParticipantInfo.Id',
        },
        {
            name: 'get all columns',
            sql: 'SELECT * FROM Applicant INNER JOIN ParticipantInfo ON Applicant.InfoId=ParticipantInfo.Id',
        },
        {
            name: 'get birthdate & phone number',
            sql: 'SELECT BirthDate, PhoneNumber FROM Applicant INNER JOIN ParticipantInfo ON Applicant.InfoId=ParticipantInfo.Id',
        },
        {
            name: 'get all order by birthdate',
            sql: 'SELECT * FROM Applicant INNER JOIN ParticipantInfo ON Applicant.InfoId=ParticipantInfo.Id ORDER BY BirthDate ASC',
        },
        {
            name: 'participants pagination 50',
            sql: 'SELECT * FROM Applicant INNER JOIN ParticipantInfo ON Applicant.InfoId=ParticipantInfo.Id LIMIT 50, 100',
        }
    ];

    console.log('connecting ...');
    const conn = await connect();
    console.log('running queries ...');
    for (let testCase of testCases) {

        const start = new Date();
        const result = await conn.query(testCase.sql);
        console.log('test `%s` took %dms', testCase.name, new Date() - start);
        console.log(result[0]);

    }

    console.log('done, closing connection...');
    await conn.end();
    console.log('closed connection');
    await disconnect();
}

module.exports = {
    executeMariaDbQueries: executeQueries,
};
