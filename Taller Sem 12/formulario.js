function calcularCosto() {
    const precioPorHora = 10
    const horas = document.getElementById("horas").value
    const costoTotal = horas * precioPorHora
    document.getElementById("costoTotal").innerText = "Costo Total: $" + costoTotal
}
document.getElementById("encuestaForm").addEventListener("submit", function(event) {
    event.preventDefault()
    const edad = document.getElementById("edad").value
    const mensaje = document.getElementById("mensaje")
    const campos = document.querySelectorAll("#encuestaForm input, #encuestaForm select")
    let validar = true

    campos.forEach(field => {
        const errorMessage = field.nextElementSibling
        if (field.value === "") {
            field.classList.add("error")
            errorMessage.classList.remove("hidden")
            validar = false
        } else {
            field.classList.remove("error")
            errorMessage.classList.add("hidden")
        }
    })

    if (!isNaN(edad) && edad >= 18) {
        mensaje.classList.add("hidden")
        if (validar = true) {
            mensaje.innerText = "Formulario enviado correctamente."
            mensaje.classList.remove("hidden")
            this.submit()
            window.location.href = "cuestionario.html"
        }
    } else {
        document.getElementById("edad").classList.add("error")
        document.getElementById("edad").nextElementSibling.classList.remove("hidden")
        mensaje.innerText = "Por favor, ingresa una edad válida y asegúrate de ser mayor de 18 años."
        mensaje.classList.remove("hidden")
        mensaje.style.color = "red"
    }
})