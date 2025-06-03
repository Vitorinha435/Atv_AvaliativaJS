function configurar(){
    let  textoinput = document.getElementById('textoinput');
    let mensagebtn = document.getElementById('btnmen')

if((mensagebtn instanceof HTMLButtonElement)&& (textoinput instanceof HTMLInputElement)){
    mensagebtn.addEventListener('click',() =>{
        validar(textoinput.value);
        textoinput.value = '';
        });
    }

}
    
function validar(textostr){
        try{
            if (textostr > 70){
                throw new Error('a mensagem deve ter no maximo 70 caracteres ')
            }
            if (textostr = ' '){
                throw new Error('mensagem vazia');
                }
        }catch(erro){
        exibir(erro.message, 'red')
        }        
}
    
function exibir(texto, cor) {
        console.log(texto)
  let saida = document.getElementById('mensagem');
  if (saida instanceof HTMLParagraphElement) {
    saida.textContent = texto;
    saida.style.color = cor;
  }
}


document.addEventListener('DOMContentLoaded', configurar);
