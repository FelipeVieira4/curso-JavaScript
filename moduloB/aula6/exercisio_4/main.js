do {
  var nome = prompt("Digite um nome");
} while (nome.length == 0 || !isNaN(nome));

document.write(`O nome ${nome} tem ${nome.length} letras` + '<br>');
document.write(`${nome.toUpperCase()}` + '<br>');
document.write(`${nome.toLowerCase()}` + '<br>');

var number = 1523.2;

alert(`posso escrever assim ${number} ou assim ${number.toFixed(3).replace('.',',')}`);

alert(`Em real: ${number.toLocaleString("pt-BR",{style: "currency",currency:"BRL"})}`);