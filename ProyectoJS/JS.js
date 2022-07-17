const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const assunto = document.getElementById("assunto");
const formuser = document.getElementById("formuser");
const warnings = document.getElementById("warnings");

formuser.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let send = true
    let regexEmail = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/
    textalert.innerHTML =""
    var minLength = 6;
    var length = document.getElementById("nombre").value.length;
    var lenght2 = document.getElementById("assunto").value.length;

    if (length < minLength) {
        warnings += `Nome inválido`
        send = false
    }

    console.log(regexEmail.test(correo.value))
    if(!regexEmail.test(correo.value)){
        warnings += `Email inválido` 
        send = false
    } 


    if (lenght2 < minLength) {
        warnings += `Mensagem inválida`
        send = false 
    }

    if(!send){
        textalert.innerHTML = warnings
    }
    else{
        textalert.innerHTML = "Enviado com sucesso!"
    }
})


