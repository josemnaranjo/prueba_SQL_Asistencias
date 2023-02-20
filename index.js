import express from 'express';
import { sequelize } from './config/mysql.config.js';
import trabajadorRoutes from './routes/trabajador.routes.js';
import jornadaRoutes from './routes/jornadas.routes.js';



const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(trabajadorRoutes);
app.use(jornadaRoutes);

async function main (){
    try{
        await sequelize.sync();
        console.log("Conexión exitosa con la base de datos")
        app.listen(3000, ()=>{
            console.log("Escuchando al puerto 3000")
        });
    }catch(err){
        console.log("Error al conectarse con la base de datos")
    }
};

main();