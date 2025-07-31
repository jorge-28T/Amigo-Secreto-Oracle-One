const listaAmigos = []; //Arreglo donde voy a meter a todas las personas añadidas después de dar clic en "añadir".

const inputAmigo = document.getElementById("amigo"); // Con esto, guardo la referencia en una variable. Esta variable puedo darle las características u obtener su valor.
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");

function agregarAmigo() {
    if (!inputAmigo.value) { //(!inputAmigo.value) es como decir (inputAmigo.value == false) lo cual es cierto ya que un espacio vacío se considera false en js. Con esto logramos que el usuario no ingrese un espacio vacío.
        alert("Ingresa un nombre válido.");
    } else {
        listaAmigos.push(inputAmigo.value) //Se obtiene el valor (contenido) de la referencia (id: amigo) y se mete con último índice al arreglo. Servirá para luego hacer la elección aleatoria.
        ulListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`; // Con este código modifico el código HTML de la referencia id = listaAmigos y el += sirve para hacer una lista con el nombre anterior de la correspondiente reasignación de la variable ulListaAmigos.
        inputAmigo.value = ""; // Con esta línea limpiamos la caja de texto para colocar un nuevo nombre.
    }
}

function sortearAmigo() {
    const numeroAleatorio = Math.floor(Math.random() * listaAmigos.length); // Genero el número aleatorio que me servirá como índice para identificar a la persona jugada a la suerte.
    const amigoSecreto = listaAmigos[numeroAleatorio]; // Aquí accedo a un índice aleatorio.
    ulResultado.innerHTML = `<li>El elegido es: ${amigoSecreto}</li>`; // Con esta línea inyecto el texto mostrando a la persona aleatoria escogida por el código.
}

//Los nombres de las funciones agregarAmigo() y sortearAmigo() fueron extraídos del código HTML de manera que al dar clic sobre los botones en la interfaz, el código js lee la función del mismo.
