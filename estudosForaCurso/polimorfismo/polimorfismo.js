//Classe pai
class Veiculo{
  buzinar(){console.log("Veiculo não especificado")}
}

//Classe filhos
class Carro extends Veiculo{
  constructor(){
    super();
  }
  buzinar(){
   console.log("buzina_de_carro.mp3"); 
  }
}

class Aviao extends Veiculo{
  constructor(){
    super();
  }
  buzinar(){
   console.log("Avião não tem buzina"); 
  }
}


new Carro().buzinar();
new Aviao().buzinar();