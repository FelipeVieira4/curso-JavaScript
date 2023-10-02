window.document.write(window.navigator.language+"<br>")
window.document.write(window.document.URL+"<br>")

var body = document.body;
body.style.background="purple";


var p0 = document.getElementById("par1");
p0.style.color="blue";

document.getElementsByClassName()

var p1 = document.getElementsByTagName("p")[1];
p1.getElementsByTagName("strong")[0].style.color="red";

document.write("Puxa texto do P<1>:"+p1.innerText+"<br>");
document.write("Puxa html do P<1>:"+p1.innerHTML);

var div0 = document.querySelector("div#clique");
div0.style.color="green";
