var vidas = 5;
var acertos = 0;
var valorCorreto=Math.floor(Math.random()*10);// de 0 até 10
console.log(valorCorreto);


const desenharVidas = () =>{
  let vidasDiv = document.getElementById("vidas");

  vidasDiv.textContent="";
  for (let i = 0; i < vidas; i++) {
    vidasDiv.textContent += "❤️";
  }
}


const chutarNumero = () =>{
  var valorChute=Number.parseInt(document.getElementById("chute").value);
  
  if(isNaN(valorChute)){
    alert("Digite valor validos");
    return;
  }

  if(valorChute==valorCorreto){
    alert("Parabéns você ganhou!!");
    acertos++;

    //A cada acerto aumenta "valorCorreto" em 10 números
    valorCorreto=Math.floor(Math.random()*(10+(acertos*10)));
    vidas=5;

    console.log(valorCorreto);
  }else{
    vidas--;
    if(vidas <= 0){
      alert("Perdeu!!");
      acertos=0;
      vidas=5;
    }else{
      desenharVidas();
    }
  }

}


const alterarTema = () =>{
  document.body.classList.toggle("dark-mode");
}