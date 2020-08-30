module.exports = {
    PORT: process.env.PORT,
    DB: {
        username: "postgres",
        password: process.env.DB_PASSWORD,
        database: "trh-db-prod",
        host: process.env.DB_HOST,
        dialect: "postgres"
    }
};