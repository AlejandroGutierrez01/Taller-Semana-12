document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault()
    const usuario = document.getElementById("usuario").value
    const contrasena = document.getElementById("contrasena").value
    const error = document.getElementById("error")

    const usuarioValido = "Alejandro"
    const contrasenaValida = "1234"

    if (usuario === usuarioValido && contrasena === contrasenaValida) {
        error.textContent = ""
        window.location.href = "formulario.html"
    } else {
        error.textContent = "Usuario o contraseña incorrectos. Por favor, inténtelo de nuevo."
    }

})