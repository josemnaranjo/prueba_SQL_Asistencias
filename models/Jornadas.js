import { DataTypes } from "sequelize";
import { sequelize } from "../config/mysql.config.js";


export const Jornadas = sequelize.define('jornada',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    date:{
        type:DataTypes.DATE
    },
    horaInicio:{
        type:DataTypes.TIME
    },
    horaFinal:{
        type:DataTypes.TIME
    }
},{
    timestaps:false
});

