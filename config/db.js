import { Sequelize } from "sequelize";

const database = new Sequelize('database_mushymatch', 'root', '',{
    host: "localhost",
    dialect: "mysql"
})

export default database;