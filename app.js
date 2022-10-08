const nombre = document.getElementById("Nombre")
const apellido = document.getElementById("Apellido")
const telefono = document.getElementById("NumeroTelefono")
const email = document.getElementById("emailAddress")
const pass = document.getElementById("passwordEmail")
const parrafo = document.getElementById("warnings")
parrafo.style.color="red";

function enviarFormulario(){
    var MensajesError = [];
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if(nombre.value.length < 5 || nombre.value === null || nombre.value === ""){
        MensajesError.push("* ingrese nombre valido");
    }
    if(apellido.value.length < 5 || apellido.value === null || apellido.value === ""){
        MensajesError.push("* ingrese apellido valido");
    }
    console.log(regexEmail.test(emailAddress.value))
    if(!regexEmail.test(emailAddress.value)){
        MensajesError.push("* el email no es valido");
    }
    if(telefono.value.length < 10){
        MensajesError.push("* ingrese un numero celular valido");
    }
    if(pass.value.length < 4){
        MensajesError.push("* la contraseña debe ser mayor a 4 caracteres");
    }
    parrafo.innerHTML = MensajesError.join('<br>')

    return false
}


function mostrarInicio(){
    document.getElementById('inicio').style.display= 'grid';
    document.getElementById('tablas').style.display= 'none';
    document.getElementById('Video').style.display= 'none';
    document.getElementById('formulario').style.display= 'none';
}
function mostrarTabla(){
    document.getElementById('tablas').style.display= 'block';
    document.getElementById('inicio').style.display= 'none';
    document.getElementById('Video').style.display= 'none';
    document.getElementById('formulario').style.display= 'none';
}
function mostrarVideo(){
    document.getElementById('Video').style.display= 'flex';
    document.getElementById('inicio').style.display= 'none';
    document.getElementById('tablas').style.display= 'none';
    document.getElementById('formulario').style.display= 'none';
}
function mostrarFormulario(){
    document.getElementById('inicio').style.display= 'none';
    document.getElementById('tablas').style.display= 'none';
    document.getElementById('Video').style.display= 'none';
    document.getElementById('formulario').style.display= 'flex';
}