const mariadbConnect = require('mariadb/types');
const {mariaDbConfig} = require("../constants");


const pool = mariadbConnect.createPool(mariaDbConfig);

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
