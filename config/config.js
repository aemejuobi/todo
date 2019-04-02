var password = process.env.password;
var user = process.env.user;
var database = process.env.database;
var host = process.env.host;

module.exports = {
    "development": {
        "username": user,
        "password": password,
        "database": database,
        "host": host,
        "dialect": "mysql"
    },
    "test": {
        "username": "root",
        "password": null,
        "database": "database_test",
        "host": "127.0.0.1",
        "dialect": "mysql"
    },
    "production": {
        "use_env_variable": "JAWSDB_URL",
        "dialect": "mysql"
    }

};

