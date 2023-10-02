# Aula 7: Operadores
> Tipo de operadores matématicos em JavaScript

## Tipos de operadores
+ Soma +
+ Subtração -
+ Divisão /
+ Multiplição *
+ Modulo %
+ Exponenciação %

---

## Precedencia
>existe uma ordem de prioridades dos operados

|Prioridade | Operador |
|-----------|----------|
| 1 | () |
| 2 | ** |
| 3 | * / % |
| 4 | + -|


## Exemplos

```javascript
var numero1 = 2;
var numero2 = 5;

var numero3 = numero2 + 1;// recebe numero2 + 1

var exponencia = numero3**numero1 / numero2;//recebe exponencia de numero3 com numero1 e divide por numero 2

console.log(numero3);
console.log(exponencia);
```

#### OUTPUT
```javascript
6
7.2
```

## Operadores atribuição

#### Exemplos:
>Operadores de atribuições composta são usados para adicionar um valor especificado à variável existente

```javascript
var numero1 = 2;
numero1+=2; //Agora "numero1" vai se 4
```

```javascript
var numero1 = 2;
numero1*=5; //Agora "numero1" vai se 10
```