function evaluarCuestionario() {
    const respuestasCorrectas = {
        pregunta1: "quito",
        pregunta2: "verdadero",
        pregunta3: "pacifico",
        pregunta4: ["rojo", "azul", "amarillo"],
        pregunta5: "everest"
    };

    let puntos = 0;
    
    const pregunta1 = document.getElementById("pregunta1").value.trim();
    if (pregunta1.toLowerCase() === respuestasCorrectas.pregunta1.toLowerCase()) {
        puntos += 2;
    }

    const pregunta2 = document.querySelector('input[name="vf1"]:checked');
    if (pregunta2 && pregunta2.value === respuestasCorrectas.pregunta2) {
        puntos += 2;
    }

    const pregunta3 = document.querySelector('input[name="opcion"]:checked');
    if (pregunta3 && pregunta3.value === respuestasCorrectas.pregunta3) {
        puntos += 2;
    }

    const pregunta4 = document.querySelectorAll('input[name="color"]:checked');
    const seleccionadosPregunta4 = Array.from(pregunta4).map(input => input.value);
    if (arraysIguales(seleccionadosPregunta4, respuestasCorrectas.pregunta4)) {
        puntos += 2;
    }

    const pregunta5 = document.querySelector('input[name="montana"]:checked');
    if (pregunta5 && pregunta5.value === respuestasCorrectas.pregunta5) {
        puntos += 2;
    }

    mostrarResultado(puntos);
}

function mostrarResultado(puntos) {
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.classList.remove("hidden");

    if (puntos < 5) {
        resultadoDiv.innerText = `Puntuación: ${puntos} \nInsuficiente.`;
        resultadoDiv.className = "insuficiente";
    } else if (puntos < 7) {
        resultadoDiv.innerText = `Puntuación: ${puntos} \nRegular.`;
        resultadoDiv.className = "regular";
    } else if (puntos < 9) {
        resultadoDiv.innerText = `Puntuación: ${puntos} \nBuena.`;
        resultadoDiv.className = "buena";
    } else {
        resultadoDiv.innerText = `Puntuación: ${puntos} \nSobresaliente.`;
        resultadoDiv.className = "sobresaliente";
    }
}

function arraysIguales(array1, array2) {
    return array1.length === array2.length && array1.every(value => array2.includes(value));
}
