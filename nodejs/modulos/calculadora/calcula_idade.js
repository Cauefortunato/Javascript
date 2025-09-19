// Função para calcular a idade com base no ano de nascimento
 export function idade(a) {
    return hoje - a;
}
const hoje = new Date().getFullYear();
