import { Trabajador } from "../models/Trabajador.js";
import { Jornadas } from "../models/Jornadas.js";

export const createTrabajador = async(req,res) =>{
    try{
        const { name, rut } = req.body;
        const newTrabajador = await Trabajador.create({
            name,rut
        });
        res.json(newTrabajador)

    }catch(err){
        return res.status(500).json({message:err.message})
    }
}