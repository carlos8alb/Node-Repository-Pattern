module.exports = {
    PORT: process.env.PORT,
    DB: {
        username: "postgres",
        password: "mysecretpassword",
        database: "trh-db-qa",
        host: "localhost",
        dialect: "postgres"
    }
};