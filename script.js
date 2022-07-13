let numbers=[4,7,86,784,8,9,737,83,95,92,99,2209,38]


// adding all numbers in an array

function addallarray(arr){
    let res = 0
   for(let i=0 ; i<arr.length;i++){
      res=res+arr[i]
    
   }
   let rem=[res]
 return rem
}
console.log(addallarray(numbers));

let array=["anil","kumar","ummmidi","hey","how", "are","you"]
// attach all strings
function attach1(arr){
    let rem=[]
    for(let i=0 ; i<arr.length;i++){
       rem=rem+arr[i]
     
    }
    
  return [rem]
}
console.log(attach1(array))

// reverse the string 
 let string1=["hello"]
string1.split("")
//  function rever(arr){
//     for(let i=0;i>arr.length;i++){
//       let  res = arr.reverse()
       
//     }

// return res
// }
console.log(string1)


