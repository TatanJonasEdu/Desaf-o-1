//.Seleccion de texto.//
const btnEncriptar = document.querySelector(".btn-encriptar");
const txtEncriptar = document.querySelector(".encriptar");
const aviso = document.querySelector(".texto_reco");
const respuesta = document.querySelector(".resultado");
const contenido = document.querySelector(".tarjeta_contenedor");
const btnCopiar = document.querySelector(".btn_copiar");
const btnDesencriptar = document.querySelector(".btn-desencriptar");
const btnPegar = document.querySelector(".btn-pegar");




//.Boton para encriptar.//
btnEncriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt= texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " " );
    
    if(texto == ""){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#ffff";
        aviso.style.fontweight = "800";
        aviso.textContent = "Por favor ingresar texto, no se vale si se encuentra vacio¡¡";

        setTimeout(()=>{
            aviso.removeAttribute("style")
        },2000);
    }

    else if(texto !== txt){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#ffff";
        aviso.style.fontweight = "800";
        aviso.textContent = "No se permiten caracteres especiales, incluyendo espacios¡¡";

        setTimeout(()=>{
            aviso.removeAttribute("style")
        },2000);
    }
    
    else if (texto !== texto.toLowerCase()){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#ffff";
        aviso.style.fontweight = "800";
        aviso.textContent = "No se permiten letras mayusculas¡¡";
    
        setTimeout(()=>{
            aviso.removeAttribute("style")
        },2000);
    }

    else{
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");

        respuesta.innerHTML = texto;
        btnCopiar.style.visibility = "inherit";
        contenido.remove();
    }
});


//.Boton para desencriptar.//
btnDesencriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt= texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " " );
    
    if(texto == ""){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#f40808";
        aviso.style.fontweight = "800";
        aviso.textContent = "Por favor ingresar texto, no se vale si se encuentra vacio¡¡";

        setTimeout(()=>{
            aviso.removeAttribute("style")
        },2000);
    }

    else if(texto !== txt){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#ffff";
        aviso.style.fontweight = "800";
        aviso.textContent = "No se permiten caracteres especiales, incluyendo espacios¡¡";

        setTimeout(()=>{
            aviso.removeAttribute("style")
        },2000);
    }
    
    else if (texto !== texto.toLowerCase()){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#ffff";
        aviso.style.fontweight = "800";
        aviso.textContent = "No se permiten letras mayusculas¡¡";
    
        setTimeout(()=>{
            aviso.removeAttribute("style")
        },2000);
    }

    else{
        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ufat/mg, "u");

        respuesta.innerHTML = texto;
        btnCopiar.style.visibility = "inherit";
        contenido.remove();
    }
});

//.Boton para copiar.//
btnCopiar.addEventListener("click", e=>{
    e.preventDefault();
    let copiar = respuesta;
    copiar.select();
    document.execCommand("copy");
    btnPegar.style.visibility = "inherit";
   



});

/*//.Boton para pegar.//
btnPegar.addEventListener("paste",(event) =>{
    txtEncriptar.focus()
    txtEncriptar.value += event.clipboardData("text/plain");
});*/

//.Boton para pegar.//
btnPegar.addEventListener("click", e=> {
    txtEncriptar.value = "";
    document.execCommand("paste");
    txtEncriptar.value += respuesta.value;
});



