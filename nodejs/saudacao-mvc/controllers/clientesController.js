
const loginresultadoModel = require("../models/loginresultadoModel");
const express = require('express');
const router = express.Router();


module.exports = {
    clientes: (req, res) => {
        res.sendFile("clientes.html", { root: "./views" });
    },  

    login : (req, res) => {
        res.sendFile("login.html", { root: "./views" });
    },
    loginresultadoModel: (req, res) => {
        const { username, password } = req.body;
        const resultado = loginresultadoModel.validarUsuario(username, password);
        res.send(`<h1>${resultado}</h1>`);
    }
};

