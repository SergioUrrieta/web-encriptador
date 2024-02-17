
//variables
var escrito = document.querySelector("#texto");
var boton2 =  document.querySelector(".btn2");
var resultado =document.querySelector('.texto-resultado');
var contenido = document.querySelector('.contenido-2');
var boton3 = document.querySelector('.btn3')


///eventos
 boton2.onclick = encriptar;

 boton3.onclick = desencriptar;



///Funciones
function desencriptar(){
  
      if (tieneMayuscula() || tieneCaracteres()){
        mostrarAlerta();
      }else {
       operadesencriptar();
      }
}

function encriptar(){
      if (tieneMayuscula() || tieneCaracteres()){
        mostrarAlerta();
      }else{
       operaencriptado();
      }
   
   } 

function operaencriptado(){
  let cajatexto = document.querySelector("#texto")
  let texto = encriptarTexto(cajatexto.value)
     console.log(texto)
    if (texto == 0){
      mostrarerror();
    }else{
    mostrarencriptado();
    }
}

function operadesencriptar() {
  let cajatexto = document.querySelector("#texto")
  let texto = desencriptarTexto(cajatexto.value)
  console.log(texto);
    if (texto == 0){
      mostrarerror();
    }else{
    mostrardesencriptado();
    }
}


function recuperarTexto(){
    let cajatexto = document.querySelector("#texto")
     let texto = cajatexto.value
   return texto;
      
 }
    

function encriptarTexto( mensaje ){
  let texto = mensaje;
  let textoFinal = "";

  for(var i = 0; i < texto.length; i++){
      if(texto[i] == "a"){
          textoFinal = textoFinal + "ai"
      }
      else if(texto[i] == "e"){
          textoFinal = textoFinal + "enter"
      }
      else if(texto[i] == "i"){
          textoFinal = textoFinal + "imes"
      }
      else if(texto[i] == "o"){
          textoFinal = textoFinal + "ober"
      }
      else if(texto[i] == "u"){
          textoFinal = textoFinal + "ufat"
      }
      else{
          textoFinal = textoFinal + texto[i]
      }
  }
  return textoFinal;
}

function desencriptarTexto( mensaje ){
  let texto = mensaje;
  let textoFinal = "";

  for(var i = 0; i < texto.length; i++){
      if(texto[i] == "a"){
          textoFinal = textoFinal + "a"
          i = i+1;
      }
      else if(texto[i] == "e"){
          textoFinal = textoFinal + "e"
          i = i+4;
      }
      else if(texto[i] == "i"){
          textoFinal = textoFinal + "i"
          i = i+3;
      }
      else if(texto[i] == "o"){
          textoFinal = textoFinal + "o"
          i = i+3;
      }
      
      else if(texto[i] == "u"){
          textoFinal = textoFinal + "u"
          i = i+3;
      }
      else{
          textoFinal = textoFinal + texto[i];
      }
      
  }

  return textoFinal;
}


function mostrarerror(){
    contenido.classList.remove("contenido-2");
    contenido.classList.add("contenido-2b");
    resultado.textContent='*Error* debes colocar texto para encriptar o desencriptar '
    
    setTimeout(() => {
      contenido.classList.remove("contenido-2b");
    contenido.classList.add("contenido-2");
    resultado.textContent=' Ingrese texto para Encriptar o Desencriptar '
    
    }, 3000);
}
function mostrarAlerta(){
  
    contenido.classList.remove("contenido-2");
    contenido.classList.add("contenido-2c");
    resultado.textContent='"Alerta" el Texto no debe incluir Mayusculas o Caracteres'

    setTimeout(() => {
      contenido.classList.remove("contenido-2c");
      contenido.classList.add("contenido-2");
      resultado.textContent=' Ingrese texto para Encriptar o Desencriptar '
     },3000);
  
}

function mostrarencriptado(){
    contenido.classList.remove("contenido-2");
    contenido.classList.add("contenido-2d");
     let cajatexto = recuperarTexto();
     resultado.textContent = encriptarTexto(cajatexto);
}

function mostrardesencriptado(){
  contenido.classList.remove("contenido-2");
  contenido.classList.add("contenido-2d");
   let cajatexto = recuperarTexto();
   resultado.textContent = desencriptarTexto(cajatexto);
}


 function tieneMayuscula() {
    let cajatexto = recuperarTexto(); 
    
    if ( /[A-Z]/.test(cajatexto)) { // Verifica si el valor del campo coincide con la expresión regular
      console.log('verdad');
      return true; // Retorna verdadero si la validación es exitosa
    } else {
        console.log('falso');
      return false; // Retorna falso si la validación falla
    }
  } 

  function tieneCaracteres() {
    let cajatexto = recuperarTexto();
    if ( /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(cajatexto)) { 
      console.log('verdad');
      return true; 
    } else {
        console.log('falso');
      return false;
    }
  }


  const btnCopiar = document.querySelector("#copiar"); 
    btnCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".texto-resultado").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("hola"); 
});

  
  

       
 
