const operadores={
  '+': (num1, num2) => num1 + num2,
  '-': (num1, num2) => num1 - num2,
  '*': (num1, num2) => num1 * num2,
  '/': (num1, num2) => num1 / num2,
  '%': (num1, num2) => num1 % num2,
};

//Função para calcular
const calcular = () =>{

  //Pegar valores do HTML
  let operador = document.getElementById("op").value;
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);

  let resul;

  if(operadores.hasOwnProperty(operador)){
    resul=operadores[operador](num1,num2);
  }else{
    resul="Operador não definido";
  }

  document.getElementById("res").value=resul.toString();
}