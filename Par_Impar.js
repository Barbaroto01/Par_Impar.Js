function verificar() {
    const numeroStr = document.getElementById("numero").value;
    const resultadoDiv = document.getElementById("resultado");

    resultadoDiv.classList.remove("mostrar");

    // 1. Campo vazio
    if (numeroStr.trim() === "") {
        resultadoDiv.textContent = "Digite um número!";
        resultadoDiv.style.color = "red";
        setTimeout(() => resultadoDiv.classList.add("mostrar"), 50);
        return;
    }

    // 2. Conversão segura
    const num = Number(numeroStr);

    if (!Number.isInteger(num)) {
        resultadoDiv.textContent = "Digite um número inteiro válido.";
        resultadoDiv.style.color = "red";
    } else {
        // 3. Par ou ímpar
        if (num % 2 === 0) {
            resultadoDiv.textContent = `O número ${num} é PAR`;
            resultadoDiv.style.color = "green";
        } else {
            resultadoDiv.textContent = `O número ${num} é ÍMPAR`;
            resultadoDiv.style.color = "blue";
        }
    }

    // 4. Animação
    setTimeout(() => resultadoDiv.classList.add("mostrar"), 50);
}

function limpar() {
    document.getElementById("numero").value = "";
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.textContent = "";
    resultadoDiv.classList.remove("mostrar");
}
