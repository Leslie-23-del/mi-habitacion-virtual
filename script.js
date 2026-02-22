let personajeSeleccionado = "";

function cambiarPantalla(id) {
  document.querySelectorAll(".screen").forEach(p => {
    p.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");
}

function irAPersonajes() {
  cambiarPantalla("characters");
}

function seleccionarPersonaje(personaje) {
  personajeSeleccionado = personaje;
  document.getElementById("saludo").innerText =
    "Tu personaje: " + personajeSeleccionado;
  cambiarPantalla("room");
}

function mostrar(seccion) {
  const contenido = document.getElementById("contenido");

  if (seccion === "musica") {
    contenido.innerHTML = `
      <h3>🎵 Escuchando música</h3>
      <audio controls>
        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mp3">
      </audio>
    `;
  }

  if (seccion === "peliculas") {
    contenido.innerHTML = `
      <h3>🎬 Película</h3>
      <iframe width="400" height="250"
      src="https://www.youtube.com/embed/dQw4w9WgXcQ"
      frameborder="0" allowfullscreen></iframe>
    `;
  }

  if (seccion === "juegos") {
    contenido.innerHTML = `
      <h3>🎮 Mini Juego</h3>
      <p>Adivina un número del 1 al 3</p>
      <input type="number" id="num">
      <button onclick="jugar()">Probar</button>
    `;
  }
}

function jugar() {
  const num = document.getElementById("num").value;
  const random = Math.floor(Math.random() * 3) + 1;

  if (num == random) {
    alert("🎉 ¡Ganaste!");
  } else {
    alert("😢 Perdiste. Era " + random);
  }
}
