// var main = document.getElementById("main")	
// main.innerText="hello world"
// main.id = "main1"
// main.style.color="red"
// main.style.backgroundColor="aqua"
// main.setAttribute("class","all1")

// var inside1 = document.createElement("div")
// main.appendChild(inside1)
// inside1.innerHTML="hello hii"

// var inside2 = document.createElement("div")
// main.appendChild(inside2)
// inside2.innerHTML="hello hii"

// var inside3 = document.createElement("div")
// main.appendChild(inside3)
// inside3.innerHTML="hello hello"
// main.replaceChild(inside3, inside2)	

// main.removeChild(inside3)


// for (let i=0;i<10;i++){
//     var newelment = document.createElement("div")

//     newelment.innerHTML="hello"+i
//     newelment.id="hello"+i
//    main.appendChild(newelment)

  
   
// }

// let hello5 = document.getElementById("hello4")
// main.removeChild(hello5)
// var break11 = "<br>"

// for(let i=0;i<5;i++){
//     document.write("hello hiii hello"+i+`${break11}`)    

// }
// let hello6 = document.getElementById("hello6")
// hello6.innerHTML="hello"
// let hello66 = document.createElement("a")
// hello66.innerHTML="hello66"
// hello6.appendChild(hello66)
// hello6.onclick = function(){
//     hello6.style.color="blue"
// }

var form1 = document.getElementsByName("signin")

var label1 = document.createElement("label")
label1.innerHTML="HELLO1"

form1[0].appendChild(label1)
form1[0].name="signin11"
 
let base = document.baseURI;
document.getElementById("demo").innerHTML = base;

