function validarFormulario() {
    var campoA = parseFloat(document.getElementById("campo-A").value);
    var campoB = parseFloat(document.getElementById("campo-B").value);
    var resultadoDiv = document.getElementById("resultado");

    if (isNaN(campoA) || isNaN(campoB)) {
        resultadoDiv.textContent = "Por favor, preencha ambos os campos com números validos.";
    } else if (campoB > campoA) {
        resultadoDiv.textContent = "Formulario valido: B é maior que A.";
    } else {
        resultadoDiv.textContent = "Formulario invalido: B não é maior que A.";
    }
}