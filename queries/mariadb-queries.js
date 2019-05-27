const {connect} = require("../connectors/mariadbConnect");

async function executeQueries() {
    const queries = [
        {
            name: 'count all applicants',
            sql: 'SELECT COUNT(*) FROM Applicant INNER JOIN ParticipantInfo',
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

    const conn = await connect();

    for (let query of queries) {

        const start = new Date();
        const rows = await conn.query(query);
        console.log('query `%s` took %dms', query.name, new Date() - start);
        // console.log(rows[0]);

    }

    console.log('done, closing connection...');
    await conn.end();
    console.log('closed connection');
}

module.exports = {
    executeQueries,
};
