const {connect} = require("./mariadbConnect");

async function executeQueries() {
    const queries = [
        'SELECT * FROM Country',
    ];

    const conn = await connect();

    for (let query of queries) {
        const start = new Date();
        const rows = await conn.query(query);
        console.log('took %dms', new Date() - start)
        console.log(rows.length);
    }
}