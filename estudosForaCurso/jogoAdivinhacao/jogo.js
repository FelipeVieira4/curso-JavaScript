var vidas = 5;
var valorCorreto=Math.floor(Math.random()*20);
console.log(valorCorreto);
var acertos = 0;

const desenharVidas = () =>{
  let vidasDiv = document.getElementById("vidas");

  vidasDiv.textContent="";
  for (let i = 0; i < vidas; i++) {
    vidasDiv.textContent += "❤️";
  }
}


const chutar = () =>{
  var valorChute=Number.parseInt(document.getElementById("chute").value);
  
  if(valorChute==valorCorreto){
    alert("Parabéns você ganhou!!");
    valorCorreto=Math.floor(Math.random()*100);
    console.log(valorCorreto);

    acertos++;
    vidas=5;
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