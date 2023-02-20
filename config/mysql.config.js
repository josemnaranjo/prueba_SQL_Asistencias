import  Sequelize  from "sequelize";

export const sequelize = new Sequelize(
    'prueba_backend_appLibroAsistencia',
    'root',
    'josemnaranjoc',
    {
        host:'localhost',
        dialect:'mysql'
    }
);
