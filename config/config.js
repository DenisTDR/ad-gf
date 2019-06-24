const fs = require('fs');
const path = require("path");

const localConfigPath =  './config.local.js';
if (fs.existsSync(path.resolve(__dirname, localConfigPath))) {
    module.exports = require(localConfigPath);
} else {
    module.exports = {
        mongodbUrl: 'mongodb://localhost:27017/ad-gf',
        appPort: 3000,
        mariaDbConfig: {
            host: 'localhost',
            port: 3306,
            user: 'root',
            password: '',
            connectionLimit: 5,
            database: 'iswint_portal'
        },
    };
}
