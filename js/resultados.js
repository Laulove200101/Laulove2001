document.addEventListener("DOMContentLoaded", function () {

    const carta = document.getElementById("carta");
    const corazon = document.getElementById("corazon");
    const lineas= document.getElementById("lineas");
    const sobre= document.getElementById("sobre");

    corazon.addEventListener('click', function () {
        carta.style.visibility= "visible";
        carta.textContent="Gracias por enviarme tu colaboración, pronto recibiras una respuesta";
        lineas.style.display="none";
        sobre.style.background="#E0FFFF";
        carta.style.height="5em";
        const alturaVentana = window.innerHeight;
        corazon.style.position = 'absolute';
        corazon.style.transition = ' top 1s ease-in';
        corazon.style.top = alturaVentana + 'px';
        
        
    })


})

