function verificar() {
  const numero = document.getElementById("numero").value;
  const resultado = document.getElementById("resultado");

  // Remove classe de animação anterior
  resultado.classList.remove("mostrar");

  if (numero === "") {
    resultado.textContent = "Digite um número!";
    resultado.style.color = "red";
    setTimeout(() => resultado.classList.add("mostrar"), 50);
    return;
  }

  const num = parseInt(numero);

  if (num % 2 === 0) {
    resultado.textContent = `O número ${num} é PAR`;
    resultado.style.color = "green";
  } else {
    resultado.textContent = `O número ${num} é ÍMPAR`;
    resultado.style.color = "blue";
  }

  setTimeout(() => resultado.classList.add("mostrar"), 50);
}

function limpar() {
  document.getElementById("numero").value = "";
  const resultado = document.getElementById("resultado");
  resultado.textContent = "";
  resultado.classList.remove("mostrar");
}
