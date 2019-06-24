const mariadbConnect = require('mariadb');
const {mariaDbConfig} = require("../config/config");

mariadbConnect.typeCast = function castField(field, useDefaultTypeCasting) {
    console.log(field.type);
    if ((field.type === "BIT") && (field.length === 1)) {
        var bytes = field.buffer();
        return (bytes[0] === 1);
    }
    return (useDefaultTypeCasting());
};

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

async function disconnect() {
    await pool.end();
}

module.exports = {
    connect,
    disconnect
};
