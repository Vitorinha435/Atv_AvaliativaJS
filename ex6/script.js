function configurar(){
    let  textoinput = document.getElementById('texto');
    let mensagebtn = document.getElementById(' btnmen ')

if((mensagebtn instanceof HTMLButtonElement)&& (textoinput instanceof HTMLInputElement)){
    mensagebtn.addEventListener('click,',() =>{
        let texto = textoinput.value;
        validar(texto);
        textoinput.value = '';

        });
    }

}
    function validar(textostr){
        try{
            if 
        }
    }