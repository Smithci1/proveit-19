module.exports = {
    "development": {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        host: process.env.DB_HOSTNAME,
          dialect: 'mysql'
    },
    "production":{
    username:process.env.RDS.DB_USERNAME,
    password: process.env.RDS.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOSTNAME,
    dialect: 'mysql'
    }
}