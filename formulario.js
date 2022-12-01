const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.getElementById("email");
const telefono = document.getElementById("telefono");
const contraseña = document.getElementById("contraseña");
const terminos = document.getElementById("checkbox");
const form = document.getElementById("formulario");
const parrafo = document.getElementById("warnings");

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    parrafo.innerHTML = ""

    if(nombre.value.lent < 3){
        warnings += 'El nombre no es valido'
        entrar = true
    }
    if(apellido.value.lent<3){
        warnings += 'El apellido no es valido'
        entrar = true
    }
    if(!regexEmail.test(email.value)){
        warnings += 'El email no es valido'
        entrar = true
    }

    if(telefono.value.lent<9){
        warnings += 'el telefono no es valido'
        entrar = true
    }
    if(pass.value.length < 8){
        warnings += 'La contraseña no es valida'
        entrar = true
    }
    if(entrar){
        parrafo.innerHTML = warnings
    } else {
        parrafo.innerHTML = "Enviado"
    }

});