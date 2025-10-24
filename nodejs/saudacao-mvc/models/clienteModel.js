module.exports = {
  validarUsuario: (username, password) => {
  let acesso;
  
    if (username === "admin" && password === "senha123") {
      acesso = "Login bem-sucedido! Bem-vindo, admin.";
    } else {
      acesso = "Falha no login! Usuário ou senha incorretos.";
    }
    return acesso;
  }
};