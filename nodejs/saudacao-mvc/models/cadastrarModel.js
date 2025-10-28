
module.exports = {
    cadastrar: (id, descricao, quantidade, preco) => {
        let mensagem = `ID: ${id} Descrição: ${descricao} Quantidade: ${quantidade} Preço: R$${preco}`;
        return mensagem;
    }
};