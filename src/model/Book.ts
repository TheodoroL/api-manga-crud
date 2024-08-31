import { DataTypes } from "sequelize";
import { config } from "../sequelize.config";

export const Book = config.define("Manga",{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true, 
        primaryKey: true
    },
    nomeOriginal:{
        type: DataTypes.STRING, 
        allowNull: false
    }, 

    nomeManga:{
        type: DataTypes.STRING, 
        allowNull: false 
    },
    author:{
        type: DataTypes.STRING, 
        allowNull: false 
    }, 
    description:{
        type: DataTypes.STRING, 
        allowNull: true
    }, 
    pagina:{
        type: DataTypes.INTEGER, 
        allowNull :false
    }, 

    tema:{
        type:DataTypes.STRING, 
        allowNull :false
        
    }
}, {
    tableName:"manga",
    timestamps: false,
}); 