 export function soma(a, b) {
    return a + b;
}

 export function subtracao(a, b) {
    return a - b;
}

export function multiplicacao(a, b) {
    return a * b;
}

export function divisao(a, b) {
    if (b === 0) {
        return "Divisão por zero não é permitida.";
    }
    return a / b;
}


