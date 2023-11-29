import { books } from "./books.model.js";
import { sequelize } from "./connection.js";
import { DataTypes } from "sequelize";
export const author = sequelize.define("Author",{
    firstName:{
        type:DataTypes.STRING(200),
        allowNull:false, 
        unique:true // الاسم مايتكررش
    },
    lastName:{
        type:DataTypes.STRING(200),
        allowNull:false
    },
    Age:{
        type:DataTypes.INTEGER(200) ,
        allowNull:false ,
        
        
    },
    Country:{
        type:DataTypes.STRING(200),
        allowNull:false
    }
})

author.hasMany(books,{onDelete: 'cascade',onUpdate:'cascade'});
books.belongsTo(author);