var maindiv = document.getElementById("id001")
var button = document.getElementsByTagName("button")

button[0].addEventListener("click",function(){

for(i=0;i<20;i++){
    var divs = document.createElement("div")
    divs.innerHTML="hello"
    divs.setAttribute("id","id000"+i)
    divs.setAttribute("onclick","changecolor(this)")
maindiv.appendChild(divs)
}    
})

function changecolor(uu){
   
    uu.style.color="red"
   
}
