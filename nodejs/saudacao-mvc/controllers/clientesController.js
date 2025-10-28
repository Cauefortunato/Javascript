const clienteModel = require('../models/clienteModel');
module.exports = {
    index : (req, res) => {
        res.sendFile("clientes.html", { root: "./views" });
    },

    login : (req, res) => {
        res.sendFile("login.html", { root: "./views" });
    },
    loginresultadoModel: (req, res) => {
        const { username, password } = req.body;
        const resultado = clienteModel.validarUsuario(username, password);
        res.send(`<h1>${resultado}</h1>`);
    }
};

