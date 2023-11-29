
import { Sequelize } from "sequelize";


export const sequelize = new Sequelize('library', 'root', 'root', {
    host: 'localhost',
    dialect:'mysql' 
  });
  // test database
  export const connectDB= async ()=>{
       return await sequelize.sync({alter:false,force:false}).then(()=>{
            console.log('Connection has been established successfully.');
        }).catch(()=>{
            console.log('Error connecting to the database.');
        });
   
    }
