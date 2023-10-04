const calcular = () =>{

  //Pegar valores do HTML
  let operador = document.getElementById("op").value;
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);

  let resul;
  switch(operador){
    case "+":
      resul=num1+num2;
      break;
    case "-":
      resul=num1-num2;
      break;
    case "*":
      resul=num1*num2;
      break;
    case "/":
      resul=num1/num2;
      break;
    default:
      alert("Operador não definido");
      resul="Sem operador";
  }

  document.getElementById("res").value=resul.toString();
}