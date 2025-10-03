//const http = require("http");

import http from "http";
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html; charset=UTF-8");

  // Rota principal (GET /)
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200);
    res.end("Bem-vindo à página inicial!");

  // Rota sobre (GET /sobre)
  } else if (req.url === "/sobre" && req.method === "GET") {
    res.writeHead(200);
    res.end("Esta é a página Sobre.");

  // Rota contato (GET /contato)
  } else if (req.url === "/contato" && req.method === "GET") {
    res.writeHead(200);
    res.end("Página de Contato.");

  // Qualquer outra rota → 404
  } else {
    res.writeHead(404);
    res.end("Página não encontrada!");
  }
});

// Servidor na porta 3000
server.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
