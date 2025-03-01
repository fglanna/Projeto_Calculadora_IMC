document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("calc-form");
  const nomeInput = document.getElementById("nome");
  const nomeError = document.getElementById("nome-error");

  formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!nomeInput.value) {
      nomeError.style.display = "block";
      return;
    } else {
      nomeError.style.display = "none";
    }

    const nome = nomeInput.value;
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);

    const imc = peso / (altura * altura);
    const resultElement = document.getElementById("resultado");

    let categoria;

    if (imc < 18.5) {
      categoria = "Abaixo do Peso";
      resultElement.style.backgroundColor = "#f9ff00";
    } else if (imc < 25) {
      categoria = "Peso Normal";
      resultElement.style.backgroundColor = "#00FF00";
    } else if (imc < 30) {
      categoria = "Sobrepeso";
      resultElement.style.backgroundColor = "#d58a24";
    } else if (imc < 35) {
      categoria = "Obesidade Grau I";
      resultElement.style.backgroundColor = "#b26c18";
    } else if (imc < 40) {
      categoria = "Obesidade Grau II";
      resultElement.style.backgroundColor = "#f8230f";
    } else {
      categoria = "Obesidade Mórbida";
      resultElement.style.backgroundColor = "#dd1a0b";
    }

    resultElement.innerHTML = `<p> ${nome}, seu IMC é ${imc.toFixed(2)}</p>
    <p>Você esta na categoria: ${categoria}</p>`;

    // Atualizar a categoria - input
    document.getElementById("categoria").value = categoria;

    let dados = new FormData(formulario);

    for (let [chave, valor] of dados.entries())
      console.log(chave + " : " + valor);
  });
});
