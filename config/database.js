const {
  DB_USER = "postgres",
  DB_PASSWORD = "rG5et5yfRX6EAk1JcPMk",
  DB_NAME = "railway",
  DB_HOST = "containers-us-west-37-railway.app",
  DB_PORT = "7211",
} = process.env;

module.exports = {
  development: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    port: DB_PORT,
    dialect: "postgres"
  },
  test: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    port: DB_PORT,
    dialect: "postgres"
  },
  production: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    port: DB_PORT,
    dialect: "postgres"
  }
}
