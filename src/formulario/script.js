document.getElementById("registroForm").addEventListener("submit", function(event) {
    event.preventDefault(); // evita que se recargue la página

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const edad = document.getElementById("edad").value;
    const pais = document.getElementById("pais").value;
    const mensaje = document.getElementById("mensaje").value.trim();
    const resultado = document.getElementById("resultado");

    if (!nombre || !correo || !edad || !pais) {
        resultado.style.color = "red";
        resultado.textContent = "Por favor, complete todos los campos obligatorios.";
        return;
    }

    resultado.style.color = "green";
    resultado.textContent = `✅ Registro exitoso. Bienvenido/a ${nombre} de ${pais}.`;

    // Limpia el formulario después de enviar
    document.getElementById("registroForm").reset();
});
