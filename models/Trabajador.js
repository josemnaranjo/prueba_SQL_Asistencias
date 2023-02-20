import { DataTypes } from "sequelize";
import { sequelize } from "../config/mysql.config.js";
import { Jornadas } from "./Jornadas.js";


export const Trabajador = sequelize.define('trabajador',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING
    },
    rut:{
        type:DataTypes.CHAR,
    },
},{
    timestaps:false
});

Trabajador.hasMany(Jornadas,{
    foreignKey:'trabajadorId',
    sourceKey:'id'
});

Jornadas.belongsTo(Trabajador,{
    foreignKey:'trabajadorId',
    targetId:'id'
})