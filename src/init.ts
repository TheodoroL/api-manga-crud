import { config } from "./sequelize.config";
import { Book } from "./model/Book";
export async function init() {
    try {
        await config.authenticate();
        console.log('Banco de dados conectado com sucesso.');
        await Book.sync({ force: true });
        console.log("Tabela criada com sucesso!");
    } catch (e) {
        console.error(e);
    }
}