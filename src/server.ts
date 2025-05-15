import mongoose from "mongoose";
import app from "./app";

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || "";

mongoose
    .connect(MONGODB_URI)
    .then(() => {
        console.log("Conectado a MongoDB");
        app.listen(PORT, () => {
            console.log(`Servidor corriendo en http://localhost:${PORT}`)
        })
    })
    .catch((error) => {
        console.error("Error en la conexion a mongoDB", error)
    })