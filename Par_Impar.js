function verificar() {
    const numeroStr = document.getElementById("numero").value;
    const resultadoDiv = document.getElementById("resultado");

    resultadoDiv.classList.remove("mostrar"); 

    // 1. Tratamento de string vazia
    if (numeroStr.trim() === "") {
        resultadoDiv.textContent = "Digite um número!";
        resultadoDiv.style.color = "red";
        setTimeout(() => resultadoDiv.classList.add("mostrar"), 50);
        return;
    }

    // 2. Conversão e Validação
    const num = parseInt(numeroStr); 

    if (isNaN(num)) {
        resultadoDiv.textContent = "Entrada inválida. Digite um número inteiro.";
        resultadoDiv.style.color = "red";
    } else {
        // 3. Checagem de Par ou Ímpar
        if (num % 2 === 0) {
            resultadoDiv.textContent = `O número ${num} é PAR`;
            resultadoDiv.style.color = "green";
        } else {
            resultadoDiv.textContent = `O número ${num} é ÍMPAR`;
            resultadoDiv.style.color = "blue";
        }
    }

    // 4. Exibe o resultado com animação
    setTimeout(() => resultadoDiv.classList.add("mostrar"), 50);
}

function limpar() {
    document.getElementById("numero").value = "";
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.textContent = "";
    resultadoDiv.classList.remove("mostrar");
}