import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import carBrandRoutes from "./routes/carBrandRoutes";

dotenv.config();

const app = express();

//middlewares
app.use(cors());
app.use(express.json());

//Rutas
app.use("/api", carBrandRoutes);

//Ruta Raiz
app.get("/", (_req, res) => {
    res.send("Api de autos funcionando");
});

export default app;