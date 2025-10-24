module.exports = {
  validarUsuario: (username, password) => {
 if (username === "admin" && password === "senha123") {
      return 'Usuário autenticado com sucesso.';
    }   else {
      return 'Falha na autenticação: nome de usuário ou senha incorretos.';
    }   
  } 
};