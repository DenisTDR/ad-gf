const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: 'localhost',
    port: 3306,
    user:'root',
    password: '',
    connectionLimit: 5,
    database: 'iswint_portal',
});

async function select() {
    let conn;
    try {
        conn = await pool.getConnection();
        const rows = await conn.query("SELECT * FROM Country");
        console.log(rows);
        // const res = await conn.query("INSERT INTO myTable value (?, ?)", [1, "mariadb"]);
        // console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }

    } catch (err) {
        throw err;
    } finally {
        if (conn) {
            conn.end();
        }
    }
}

module.exports = {
    select,
};