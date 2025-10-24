# lab1.1-entorno-colaborativo
# integrantes: Jarod Guallichico - Jordy Chamorro
# 🧾 Formulario de Registro - Ejemplo de Práctica Colaborativa

Este formulario fue creado como ejemplo dentro del repositorio **lab1.1-entorno-colaborativo**.  
Su objetivo es mostrar cómo trabajar en equipo usando Git, GitHub y control de versiones mientras se desarrolla un proyecto web simple.

---

## 📂 Estructura del Proyecto

src/
└── formulario/
├── index.html # Estructura del formulario
├── styles.css # Estilos del formulario
└── script.js # Lógica y validaciones en JavaScript

---

## 💻 Descripción General

El formulario permite registrar datos básicos del usuario:

- Nombre completo  
- Correo electrónico  
- Edad  
- País  
- Mensaje o comentario (opcional)

Cuando se presiona el botón **Enviar**, el formulario:

1. Valida que todos los campos obligatorios estén completos.  
2. Muestra un mensaje de confirmación en pantalla.  
3. Limpia los campos automáticamente tras el envío.  

---

## ⚙️ Funcionamiento del Código

### `index.html`
Contiene la estructura principal del formulario.  
Cada campo tiene su etiqueta (`label`) y un identificador (`id`) que permite acceder desde el script JavaScript.

### `styles.css`
Aplica un diseño simple y limpio:  
- Fondo gris claro  
- Contenedor centrado  
- Botón azul con efecto hover  
- Bordes redondeados  

### `script.js`
Controla la lógica de validación y respuesta del formulario:

1. Captura el evento `submit` del formulario.
2. Evita el recargo automático de la página con `event.preventDefault()`.
3. Obtiene los valores de los campos usando `document.getElementById()`.
4. Verifica que los campos no estén vacíos.
5. Muestra un mensaje de error si falta algún dato.
6. Si todo está correcto, muestra un mensaje de éxito con el nombre y país del usuario.
7. Limpia los campos con `form.reset()`.

Ejemplo de salida en pantalla:


---

## 🚀 Cómo Ejecutarlo

1. Clona el repositorio.
2. Asegurarse de tener instalado node.js.
3. Ejecutar los siguientes comandos desde la raíz del repositorio:
```bash
    npm install
    npm server.js
```
4. Ingresar a la URL que le muestra en el mensaje.
5. Completar el formulario y enviar.
6. Verifica los mensajes de validación.

---

## 🧠 Posibles Mejoras

- Guardar los datos ingresados en LocalStorage o una base de datos.
- Mostrar el contenido del campo “mensaje” en la salida.
- Aplicar validaciones más específicas (por ejemplo, formato de correo o edad mínima).
- Enviar los datos mediante una API.

---

## 👥 Autores del Ejemplo

- **Jarod Guallichico** – Desarrollo del ejemplo y documentación.  
- **Jordy Chamorro** - Desarrollo de nueva funcionalidad. 

---

## 📸 Evidencias Sugeridas

Guarda y agrega estas capturas en `docs/evidencias/`:
- Ejecución del formulario en el navegador.
- Mensaje de éxito.
- Archivos en el repositorio GitHub.
- Commits y ramas creadas durante el desarrollo.

---

**Licencia:** Uso educativo.  
Este ejemplo forma parte de la práctica de configuración de entorno colaborativo con Git y GitHub.
