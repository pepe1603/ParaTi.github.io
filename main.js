console.log("Hola BB :D. jajaaja");

const dialog = document.querySelector('.showHelpDialog');
const showHelp= document.getElementById('showHelp');
const btnCerrar= document.querySelector('.btn-cerrar');


showHelp.addEventListener('click', function (){
    //alert("Puedes Googlearlo , jaajaj :D");
    
    dialog.classList.toggle(".show");
    console.log("dialog Activado!!");
    
})

btnCerrar.addEventListener('click', function (){
    if(dialog.contains('.show')){
        dialog.classList.remove(".show");
    console.log("dialog Desactivado !!");
    
    }else{
        console.error("Error: No se encontro la clase");
    }
    
})


