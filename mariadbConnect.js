const mariadb = require('mariadb');
const {mariaDbConfig} = require("./constants");


const pool = mariadb.createPool(mariaDbConfig);

async function connect() {
    let conn;
    try {
        conn = await pool.getConnection();
        return conn;

    } catch (err) {
        throw err;
    }
}

module.exports = {
    connect,
};