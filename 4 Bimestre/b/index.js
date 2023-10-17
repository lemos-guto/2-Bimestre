import express from "express";
import rotas from "./rotas/rotasUsuario.js"
import cors from "cors";

const app = express();
app.use(express.json())
app.use(cors())
app.use("/user", rotas);
app.listen(8080);