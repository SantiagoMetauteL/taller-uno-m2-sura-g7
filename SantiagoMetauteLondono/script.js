// PUNTO 1
let compras = ["Manzanas"];

compras.push("Leche", "pan")

compras.unshift("huevos")

compras.splice(1, 1)

console.log(compras)

// PUNTO 2
let tareas = ["Revisar emails"];

tareas.unshift("Llamar al cliente")

tareas.unshift("Preparar reporte")

console.log(tareas)

tareas.shift()
tareas.shift()

console.log(tareas)

// PUNTO 3
let historial = ["google.com", "youtube.com", "facebook.com"];

console.log(historial)

historial.pop()

console.log(historial)

historial.pop()

console.log(historial)

// PUNTO 4
let colaImpresion = ["doc1.pdf", "doc2.png", "doc3.jpg"];

console.log(colaImpresion)

colaImpresion.shift()

console.log(colaImpresion)

colaImpresion.push("doc4.txt")

console.log(colaImpresion)

colaImpresion.shift()

console.log(colaImpresion)

// PUNTO 5
let fila = ["Ana", "Luis", "Carlos", "Maria"];

console.log(fila)

fila.splice(1, 1);

console.log(fila)

fila.splice(1, 0, "Jorge");

console.log(fila)

// PUNTO 6 
let mazo = ["As", "Rey", "Reina", "Jota"];

console.log(mazo)

mazo.reverse()

console.log(mazo)

mazo.shift()

console.log(mazo)

// PUNTO 7
let asientos = ["Ocupado", "Libre", "Libre", "Libre", "Ocupado"];

console.log(asientos)

asientos.fill("Reservado", 1, 4)

console.log(asientos)

// PUNTO 8
let productos = ["Monitor", "Teclado", "Mouse Roto", "Webcam"];

console.log(productos)

productos.splice(2, 1, "Mouse nuevo")

console.log(productos)

// PUNTO 9 
let estudiantes = ["Zapata", "Alvarez", "Gomez", "Bernal"];

console.log(estudiantes)

estudiantes.sort()

console.log(estudiantes)

// PUNTO 10
let puntuaciones = [100, 85, 92, 78];

console.log(puntuaciones)

puntuaciones.fill(0)

console.log(puntuaciones)

// PUNTO 11
let carrito = [];

console.log(carrito)

carrito.push("Camisa", "Pantalon")

console.log(carrito)

carrito.splice(0, 0, "Zapato")

console.log(carrito)

carrito.splice(1, 1)

console.log(carrito)

// PUNTO 12
let commits = ["v1.0", "v1.1"];

console.log(commits)

commits.push("v1.2")

console.log(commits)

commits.pop()

console.log(commits)

commits.push("v1.2-corregido")

console.log(commits)

// PUNTO 13
let receta = ["Paso 2: Mezclar ingredientes", "Paso 3: Hornear"];

console.log(receta)

receta.unshift("Paso 1: Pre-calentar horno")

console.log(receta)

receta.push("Paso 4: Servir" )

console.log(receta)

// PUNTO 14
let palabras = ["uno", "dos", "cuatro"];

console.log(palabras)

palabras.reverse()

console.log(palabras)

palabras.splice(0, 1, "Tres")

console.log(palabras)

// PUNTO 15
let equipo = ["Ana (Líder)", "Juan (Dev)", "Maria (Diseñadora)"];

console.log(equipo)

equipo.splice(1, 1)

console.log(equipo)

equipo.push("Pedro (Dev)", "Luisa (Dev)")

console.log(equipo)

// PUNTO 16
let parking = ["CarroA", "Libre", "Libre", "CarroB"];

console.log(parking)

parking.splice(0, 1)

console.log(parking)

parking.splice(0, 2, "MotoA","MotoB" )

console.log(parking)

// PUNTO 17
let feed = ["Foto de Ana", "Video de Juan", "Noticia de Empresa"];

console.log(feed)

feed.unshift("Alerta de Sistema")

console.log(feed)

feed.pop()

console.log(feed)

// PUNTO 18
let invitados = ["Carlos", "Beatriz", "David", "Ana"];

console.log(invitados)

invitados.sort()

console.log(invitados)

invitados.splice(1, 1)

console.log(invitados)

// PUNTO 19
 let tablero = ["Inicio", null, null, null, null, "Fin"];

 console.log(tablero)

 tablero.fill("Casilla vacia", 1, 5)

 console.log(tablero)

 // PUNTO 20
 let codigos = ["A-10", "C-30", "B-20", "D-40"];

 console.log(codigos)

 codigos.sort()

 console.log(codigos)

 codigos.splice(2, 2)
 
 console.log(codigos)

 codigos.unshift("X-99")

 console.log(codigos)

 codigos.reverse()
 
 console.log(codigos)
