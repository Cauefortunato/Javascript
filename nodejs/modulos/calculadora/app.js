//const calculadora = require('./calculadora');
//const calculaIdade = require('./calcula_idade')

import { soma, divisao, subtracao, multiplicacao } from './calculadora.js'; 
import * as calculaIdade from './calcula_idade.js';

const resultadoSoma = soma(2, 3);
const resultadoDivisao = divisao(10, 2);
const resultadoSubtracao = subtracao(5, 2);
const resultadoMultiplicacao = multiplicacao(4, 3);

const resultadoIdade = calculaIdade.idade(2008)


console.log(`Em 2025 você tem ${resultadoIdade} anos`)