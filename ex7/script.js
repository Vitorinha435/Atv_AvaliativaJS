function configurar() {
    let data = document.getElementById('validarData')
    let enviarBtn= document.getElementById('enviarBtn')
    let exibirMensagem= document.getElementById('mensagem')

    //prettier-ignore
    if((data instanceof HTMLInputElement) && (enviarBtn instanceof HTMLButtonElement) && 
    (exibirMensagem instanceof HTMLParagraphElement)){
    enviarBtn.addEventListener('click', () => {
      validarData(data.value);
    });
    }
}


function validarData(data) {
  try {

    let regexData = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!regexData.test(data)) {
      throw new Error(
       'Entrada inválida! Formato aceito - DD/MM/YYYY.'
      );
    }
    else{
        calcularIdade(data);
    }
      
        
    
 exibirMensagem('Entrada Válida!', 'green');
  } catch (error) {
    exibirMensagem(error.message, 'red');
  }
}

function exibirMensagem(texto, cor) {
  let mensagem = document.getElementById('mensagem');
  if (mensagem instanceof HTMLParagraphElement) {
    mensagem.textContent = texto;
    mensagem.style.color = cor;
  }
}

 function calcularIdade(data) {
    //DD/MM/YYYY

    let saida = data.split("/");
    let dia = saida[0];
    let mes = saida[1];
    let ano = saida[2];
    console.log("dia: "+dia);
    console.log("Mês: "+mes);
    console.log("Ano: "+ano);
    let hoje = new Date();

    let idade = hoje.getFullYear() - this.data.getFullYear();
    let mesAtual = hoje.getMonth();
    let diaAtual = hoje.getDate();

    let mesNascimento = this.data.getMonth();
    let diaNascimento = this.data.getDate();

    // Ajustar a idade se o mês ou o dia ainda não tiverem sido alcançados
    // garante que, se a pessoa ainda não tiver completado o aniversário 
    // no ano atual, a idade mostrada não seja incrementada.
    
    //(mesAtual === mesNascimento) && (diaAtual < diaNascimento)
    //Esta parte é uma condição composta que verifica se o mês atual 
    //é igual ao mês de nascimento e o dia atual é anterior ao dia de nascimento.
    //Exemplo: Se a pessoa nasceu no dia 15 de fev e hoje é 10 de fev, 
    // o aniversário ainda não aconteceu, então a idade precisa ser ajustada.
    //prettier-ignore
    if ((mesAtual < mesNascimento) || (mesAtual === mesNascimento) && (diaAtual < diaNascimento)) {
      idade--;
    }

    return idade;
  }

document.addEventListener('DOMContentLoaded', configurar);