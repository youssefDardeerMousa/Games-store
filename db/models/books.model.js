import { DataTypes } from "sequelize";
import { sequelize } from "./connection.js";


export const books=sequelize.define("books",{
    BooksName:{
        type:DataTypes.STRING(100),
        allowNull:false
    },
    color:{
        type:DataTypes.STRING(100),
        allowNull:false
    },
    publishTime:{
        type:DataTypes.INTEGER(100),
        allowNull:false
    }

},{
    timestamps:false
})


