import { Jornadas } from "../models/Jornadas.js";


export const createJornada = async(req,res)=>{
    try {
        const {horaInicio ,horaFinal , trabajadorId} = req.body;
        const nuevaJornada = await Jornadas.create({horaInicio , horaFinal , trabajadorId});
        res.json(nuevaJornada);
    } catch (err) {
        return res.status(500).json({message:err.message})
    }
};