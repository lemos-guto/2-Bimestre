import express, { query } from "express";
import { db } from "../db.js";
import { buscarUsuarios } from "../Controllers/userController.js";

const rotas = express.Router();
rotas.get("/", buscarUsuarios);
rotas.get("/:id", (req, res) => {
    const id = req.params.id;
    const query = "SELECT * FROM Usuario WHERE id = ?";
    db.query(query, id, (error, data ) =>{
        if (error) return res.json(error);
        return res.json(data).status(200);
    } )

});

rotas.put("/:id", (req, res) => {
    const valores = [
        req.body.nome,
        req.params.id
    ]

    const query = "UPDATE Usuario SET nome = ? WHERE id = ?" //"?"" é o parametro que vem do site;
    db.query(query, [...valores],(error) =>{
        if (error) return res.json(error);
        return res.json("Usuario Alterado!").status(201);
    } )
})

rotas.post("/", (req, res) => {
    const query = "INSERT INTO Usuario (`nome`) VALUES(?)" //"?"" é o parametro que vem do site;
    db.query(query, [req.body.nome],(error) =>{
        if (error) return res.json(error);
        return res.json("Usuario Cadastrado!").status(201);
    } )
})

rotas.delete("/:id", (req, res) => {
    const query = "DELETE FROM Usuario WHERE id = ?" //"?"" é o parametro que vem do site;

    db.query(query, [req.params.id],(error) =>{
        if (error) return res.json(error);
        return res.json("Usuario Deletado!").status(201);
    } )
})

export default rotas;