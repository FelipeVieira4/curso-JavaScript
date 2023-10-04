const soma = (x,y) =>{
  return x+y;
}

const subtracao = (x,y) =>{
  return x-y;
}

const TextF = (x,y,CallBackFunction) => {
  return CallBackFunction(x,y);
}

console.log(TextF(2,5,(x,y)=>{return y/x;}));