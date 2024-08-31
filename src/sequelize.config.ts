import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();
export const config = new Sequelize(process.env.URL_DATABASE ?? "", {
    dialect: "postgres",
    logging: false,
});