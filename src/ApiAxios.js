import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

function Dep(){

    const[array,setArray]=useState([]);
    
    useEffect(()=>{
    
    const ResponseData= async ()=>{

        try{
            const response= await axios.get('https://jsonplaceholder.typicode.com/posts/')
            console.log(response.data);
            setArray(response.data)
        }
        catch(error){
            console.error(error)
        }
    }

    ResponseData()
            },[])
        
    return(
        <div>

            {
                (array || [])?.map((item)=><li>{item.title}</li>)
            }

        </div>
    );
}

export  default Dep;