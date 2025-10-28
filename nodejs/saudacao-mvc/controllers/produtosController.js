const cadastrarModel = require('../models/cadastrarModel');

module.exports = {

produtos: (req, res) => {
res.sendFile("produtos.html", { root: "./views" });
},

camisetas: (req, res) => {
res.sendFile("camisetas.html", { root: "./views" });
 }  ,

cadastrar : (req, res) => {
    const { id, descricao, quantidade, preco } = req.body;
    const mensagem = cadastrarModel.cadastrar(id, descricao, quantidade, preco);
    res.send(`<h1>${mensagem}</h1>`);
  },  

formCadastrar : (req, res) => {
    res.sendFile("cadastrar.html", { root: "./views" });
  } 
}
;