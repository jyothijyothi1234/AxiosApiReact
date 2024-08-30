import React, { useEffect, useState } from "react";


const Applik = ()=>{


    const[array,setArray]=useState([]);


useEffect(()=>{

    setTimeout(()=>{

    const ResponseData=  async ()=>{


        try{
            const response=  await fetch('https://jsonplaceholder.typicode.com/posts/')
            const data=  await response.json();
            console.log(data)
            setArray(data)
            }
        
            catch(error){
                console.error(error)
            }


        }

        ResponseData()

    },2000)

    console.log("jyothi")
    
    },[])

    
   
return (
    <div>
        {
           (array || [])?.map((item)=><li>{item.title}</li>)
        }

    </div>
);

}


export default Applik;