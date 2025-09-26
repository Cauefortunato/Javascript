//const calculadora = require('./calculadora');
//const calculaIdade = require('./calcula_idade')

import { soma, divisao, subtracao, multiplicacao } from './calculadora.js'; 
import * as calculaIdade from './calcula_idade.js';

const resultadoSoma = soma(2, 3);
const resultadoDivisao = divisao(10, 2);
const resultadoSubtracao = subtracao(5, 2);
const resultadoMultiplicacao = multiplicacao(4, 3);

const resultadoIdade = calculaIdade.idade("Cauê", 2008, 2025)


console.log(resultadoIdade)
console.log(`Soma: ${resultadoSoma}`);
console.log(`Divisão: ${resultadoDivisao}`);
console.log(`Subtração: ${resultadoSubtracao}`);
console.log(`Multiplicação: ${resultadoMultiplicacao}`);