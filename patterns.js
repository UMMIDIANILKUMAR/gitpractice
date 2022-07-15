let a=""
for(i=1;i<6;i++){
a+=i
console.log(a)
}

let b=""
for(i=5;i>0;i--){
    for(let j = 0; j < 5; j++) {
b+="*"

}
b=b+"\n"
}
console.log(b)


let string = "";
for (let i = 1; i <5; i++) {

  for (let j = 0; j < 5; j++) {
    string += " ";
  }
  
  for (let k = 0; k < 5-i; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);