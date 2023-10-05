/*
Código JavaScript para jogo de Adivinhação
Última atualização: 5/10/2023
*/

// Declaração de Varíaveis
var vidas = 5;
var acertos = 0;
var valorCorreto=Math.floor(Math.random()*10);// de 0 até 10

//Função para rescrever as vidas na página
const desenharVidas = () =>{
  let vidasDiv = document.getElementById("vidas");

  vidasDiv.textContent="";
  for (let i = 0; i < vidas; i++) {
    vidasDiv.textContent += "❤️";
  }
}

//Desenha a margen que o valor correto pode ser
const desenharValorCorreto = () =>{
  let ranNumeros = document.getElementById("ranNumeros");
  ranNumeros.textContent = `0 até ${10+(acertos*10)}`;
}

//Limpar com
const limparCom = () =>{
  let comDom=document.getElementById("com");
  comDom.textContent="";
}

const chutarNumero = () =>{
  var valorChute=Number.parseInt(document.getElementById("chute").value);
  
  if(isNaN(valorChute) || valorChute > 10+(acertos*10)){
    alert("Digite valores validos");
    return;
  }

  
  if(valorChute==valorCorreto){
    alert("Parabéns você ganhou!!");
    acertos++;

    //A cada acerto aumenta "valorCorreto" em 10 números
    valorCorreto=Math.floor(Math.random()*(10+(acertos*10)));
    vidas=5;

    document.getElementById("com").textContent="";
    limparCom();
  }else{
    vidas--;// Remover uma vida

    if(vidas <= 0){ // Se ficou sem vidas
      alert("Perdeu!!");
      acertos=0;
      vidas=5;
      limparCom();
    }else{
      let com; 
      let comDom=document.getElementById("com");

      valorChute<valorCorreto?com="<":com=">";

      comDom.textContent+=`${valorChute} ${com} X `;
      
    }
  }
  desenharVidas();
  desenharValorCorreto();
}

//Função para alterar o tema
const alterarTema = () =>{
  document.body.classList.toggle("dark-mode");
}