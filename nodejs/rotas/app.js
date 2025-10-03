// app.js
import http from 'http'; 
// Importa o módulo HTTP

// Define a porta do servidor
const PORT = 3000;


// Cria o servidor HTTP
const server = http.createServer((request, response) => {
    const url = request.url;
    const method = request.method;  

    // Define o cabeçalho da resposta
    response.setHeader('Content-Type', 'text/html; charset=UTF-8');

    // Roteamento básico
    if (url === '/') {
        response.statusCode = 200;
        response.end('<h1>Bem-vindo à página inicial!</h1>');
    }   

    // Rota sobre (GET /sobre)
    else if (url === '/sobre' && method === 'GET') {
        response.statusCode = 200;
        response.end('<h1>Esta é uma aplicação de exemplo com node.js puro.</h1>');
    }
    
    // Rota contato (GET /contato)
    else if (url === '/contato') {
        response.statusCode = 200;
        response.end('<h1>Fale conosco.</h1>');
    }

    
    else if (url === '/fotos'){
        response.statusCode = 200;
        response.end('<h1>Veja nossas fotos.</h1>');
    }

    // Qualquer outra rota → 404
    else {
        response.statusCode = 404;
        response.end('<h1>404 - Página não encontrada!</h1>');
    }
});

// Inicia o servidor
server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});     