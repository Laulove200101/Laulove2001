document.addEventListener("DOMContentLoaded", function () {

const mail=document.getElementById("mail");
const nicktwitch=document.getElementById("nicktwitch");
const nickyoutube=document.getElementById("nickyoutube");
const mensaje=document.getElementById("mensaje_contacto");


function verificarCorreo(){
    const regex=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    const valor=mail.value.trim();
    if(valor===''){
        mail.setCustomValidity('El email es obligatorio');
        mail.reportValidity();
        return false;
    }
    if(!regex.test(valor)){
        mail.setCustomValidity('Introduce un email válido');
        mail.reportValidity();
        return false;
    }
    mail.setCustomValidity('');
    return true;
}

function verificarRedes(){
    const regex=/^[A-Za-z0-9áéíóúÁÉÍÓÚñÑ_\-\s]{3,}$/;
    const valortwitch=nicktwitch.value.trim();
    const valoryoutube=nickyoutube.value.trim();
    if(valortwitch==='' && valoryoutube===''){
        alert("Tiene que rellenar al menos uno de los dos campos");
        return false;
    }
    if (valortwitch !== '' && !regex.test(valortwitch)) {
        nicktwitch.setCustomValidity('Introduce un nombre válido');
        nicktwitch.reportValidity();
        return false;
    } else {
        nicktwitch.setCustomValidity('');
    }
    if (valoryoutube !== '' && !regex.test(valoryoutube)) {
        nickyoutube.setCustomValidity('Introduce un nombre válido');
        nickyoutube.reportValidity();
        return false;
    } else {
        nickyoutube.setCustomValidity('');
    }
    return true;
}

function verificarMensaje(){
    const regex=/^.{10,}$/;
    const valormensaje=mensaje.value.trim();
    if(valormensaje===''){
        mensaje.setCustomValidity('Introduce un mensaje');
        mensaje.reportValidity();
        return false;
    }
    if(!regex.test(valormensaje)){
        mensaje.setCustomValidity('Introduce un mensaje válido');
        mensaje.reportValidity();
        return false;
    }
    mensaje.setCustomValidity('');
    return true;
}

const form=document.querySelector("form");
form.addEventListener('submit' , function(e){
    if(!verificarCorreo() || !verificarRedes() || !verificarMensaje() ){
        e.preventDefault();
    }

})


})