# Aula9: Utilização de DOM
> Aprender a modificar componentes da árvore HTML com JavaScript

--------------------------

## Funções getElement(s)
> Em JavaScript há 5 formas de pegar os componentes do HTML

- ID
```javascript
var componentById = document.getElementById("ID");
```
- TagName
```javascript
var componentByTagName = document.getElementsByTagName("TagName");
```
como mais de uma componente pode ter mesma TagName é recomentado utilizar index para buscar o componente correto, sendo assim: 
```javascript
var componentByTagName = document.getElementsByTagName("TagName")[index];
```
- Classes
```javascript
var componentBySelector = document.getElementsByClassName("Class")[index];
```

- QuerySelector
```javascript
var componentBySelector = document.querySelector("div#ID");
```