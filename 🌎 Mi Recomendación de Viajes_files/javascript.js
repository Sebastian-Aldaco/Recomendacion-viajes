// ==================================================
// JAVASCRIPT - MI RECOMENDACIÓN DE VIAJES
// ==================================================



// ==================================================
// FUNCIÓN: VOLTEAR TARJETAS
// ==================================================

function voltearTarjeta(tarjeta) {

    /*
      classList.toggle() hace algo muy sencillo:

      Si la tarjeta NO tiene la clase "is-flipped",
      se la agrega.

      Si ya la tiene,
      la elimina.

      CSS utiliza esa clase para rotar la tarjeta.
    */

    tarjeta.classList.toggle("is-flipped");

}



// ==================================================
// FUNCIÓN: BUSCADOR DEL NAVBAR
// ==================================================

function buscarSeccion(evento) {

    /*
      Normalmente un <form> intenta enviar información
      y recargar la página.

      preventDefault() evita ese comportamiento.
    */

    evento.preventDefault();


    /*
      Obtenemos lo escrito en nuestro input.

      Ejemplo:
      "destinos"
      "recomendaciones"
      "opiniones"
    */

    let seccion =
        document.getElementById("busquedaSeccion").value;


    /*
      location.hash cambia la parte final de la URL.

      Si seccion contiene "destinos":

      nuestra página pasa a:

      index.html#destinos

      Y el navegador busca automáticamente:

      id="destinos"
    */

    window.location.hash = seccion;

}



// ==================================================
// FUNCIÓN: PEDIR OPINIÓN
// ==================================================

function pedirOpinion() {


    // ==================================================
    // STRING
    // ==================================================

    /*
      prompt() recibe información escrita por el usuario.

      La información recibida es texto,
      por lo tanto es un String.
    */

    let nombre = String(
        prompt("¿Cómo te llamas?")
    );


    let destino = String(
        prompt("¿Qué destino de la página te gustaría visitar?")
    );



    // ==================================================
    // INTEGER / NUMBER
    // ==================================================

    /*
      prompt() originalmente devuelve texto.

      parseInt() intenta convertir ese texto
      a un número entero.

      Ejemplo:

      "5"

      pasa a ser:

      5
    */

    let calificacion = parseInt(
        prompt("Del 1 al 5, ¿qué calificación le das?")
    );



    // ==================================================
    // BOOLEAN
    // ==================================================

    /*
      confirm() muestra dos botones.

      Aceptar = true
      Cancelar = false

      Por eso esta variable es un Boolean.
    */

    let viajaria = confirm(
        "¿Realmente visitarías este lugar?"
    );



    // ==================================================
    // ALERT
    // ==================================================

    alert(
        "¡Gracias por compartir tu opinión, " + nombre + "!"
    );



    // ==================================================
    // MOSTRAR INFORMACIÓN EN LA PÁGINA
    // ==================================================

    document.getElementById("resultadoOpinion").innerHTML =

        "<h4>⭐ Nueva opinión</h4>" +

        "<p><strong>Usuario:</strong> "
        + nombre +
        "</p>" +

        "<p><strong>Destino:</strong> "
        + destino +
        "</p>" +

        "<p><strong>Calificación:</strong> "
        + calificacion +
        " / 5</p>" +

        "<p><strong>¿Lo visitaría?:</strong> "
        + viajaria +
        "</p>";

}