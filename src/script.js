// Array para almacenar las personas
const personas = [];

// Clase Persona
class Persona {
    constructor(nombre, apellidos, edad) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
    }
}

// Función para añadir 5 personas
function añadirPersonas() {
    for (let i = 0; i < 5; i++) {
        const nombre = prompt(`Ingrese el nombre de la persona ${i + 1}:`);
        const apellidos = prompt(`Ingrese los apellidos de la persona ${i + 1}:`);
        const edad = parseInt(prompt(`Ingrese la edad de la persona ${i + 1}:`), 10);

        // Validación básica
        if (nombre && apellidos && !isNaN(edad)) {
            const persona = new Persona(nombre, apellidos, edad);
            personas.push(persona);
        } else {
            alert("Datos no válidos. Inténtelo nuevamente.");
            i--; // Repetir el ciclo en caso de datos no válidos
        }
    }
    alert("Se han añadido 5 personas al array.");
}

// Función para mostrar las personas almacenadas
function mostrarPersonas() {
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = ""; // Limpiar contenido anterior

    if (personas.length === 0) {
        outputDiv.innerHTML = "<p>No hay personas en el array.</p>";
        return;
    }

    personas.forEach((persona, index) => {
        // Crear tarjeta para cada persona
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <h3>Persona ${index + 1}</h3>
            <p><strong>Nombre:</strong> ${persona.nombre}</p>
            <p><strong>Apellidos:</strong> ${persona.apellidos}</p>
            <p><strong>Edad:</strong> ${persona.edad} años</p>
        `;

        outputDiv.appendChild(card);
    });
}