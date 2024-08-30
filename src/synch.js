
import React from "react";


// function  Attri(a){// in this function we r passing one parameter that parameter must call like a function like a() in that function 

//   console.log(a("jyothi"))// here for that function we are passing value for another function like val 
// }

//     function Anothe(val){// in this second function we r passing a parameter 
       
//         console.log("latha");
      
//         return val;// here we have return val 
//     }
//     Attri(Anothe)// here we are calling another function in a another function argument





// function Attri(a){
//     console.log(a(),"jyothi")// we need to mention that value a parameter as a function like a()
// }

// function  Addr(){

//     console.log("njl");
//     return "njp"// here we can return the value for the before function 
// }
// Attri(Addr)// here we can pass the total function to another function like are directly we can write the function of addr




function Attri(a){
    try{
        console.log(a(),"jyothi")

    }catch(error){
        console.log(error)
    }
}// this a call back function 
Attri(function  Addr(){
    try{
    console.log("njl");

    return "njp"

}catch(error){
    console.log(error)
}
})




// function Attri(a){
//     console.log(a,"jyothi")// this is just a function we r calling a value to a parameter
// }

// let c="hello"
// Attri(c)
// Attri("hello")

export  default Attri;