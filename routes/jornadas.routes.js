import { Router } from "express";
import { createJornada } from "../controllers/jornadas.controller.js";
const router = Router();

router.post('/trabajador/jornada',createJornada)

export default router