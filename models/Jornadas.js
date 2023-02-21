import { DataTypes } from "sequelize";
import { sequelize } from "../config/mysql.config.js";


export const Jornadas = sequelize.define('jornada',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    date:{
        type:DataTypes.STRING,
    },
    horaInicio:{
        type:DataTypes.STRING,
    },
    horaFinal:{
        type:DataTypes.STRING,
    }
},{
    timestamps:false
});

