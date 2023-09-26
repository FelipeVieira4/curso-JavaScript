var num1,num2;

do{
  num1 = prompt("Digite numero1:");
}while(isNaN(num1));//Loop de validação do tipo

do{
  num2 = Number(prompt("Digite numero2:"));
}while(isNaN(num2));

console.log("Num 1:"+typeof num1+"\nNum 2:"+typeof num2);

alert(`Soma dos valores:${(Number(num1)+num2)}`);
