import { Router } from "express";
import { createTrabajador } from "../controllers/trabajadores.controller.js";
const router = Router();

router.post('/trabajador',createTrabajador);


export default router;