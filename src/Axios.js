import React, { useEffect, useState } from "react";
import axios from "axios";

function Acept() {
  const [array, setArray] = useState([]);

  useEffect(() => {
    const attri = async () => {
      try {
        const response = await axios.put(
          "https://jsonplaceholder.typicode.com/users/5",{
            "id": 11,
            "name": "mk",
            "username": "Moriah.Stanton",
            "email": "Rey.Padberg@karina.biz",
            "address": {
              "street": "Kattie Turnpike",
              "suite": "Suite 198",
              "city": "Lebsackbury",
              "zipcode": "31428-2261",
              "geo": {
                "lat": "-38.2386",
                "lng": "57.2232"
              }
            },
            "phone": "024-648-3804",
            "website": "ambrose.net",
            "company": {
              "name": "Hoeger LLC",
              "catchPhrase": "Centralized empowering task-force",
              "bs": "target end-to-end models"
            }
          }
           
       )
        console.log(response.data);
        // const json = response.data.filter(
        //   (item) => item.id===11
        // );

        // name === "Leanne Graham"

        // setArray(json);

        setArray(response.data)
      } catch (error) {
        console.error(error);
      }
    };

    attri()


    const act=  async ()=>{

      try{
      const response=await axios.get("https://jsonplaceholder.typicode.com/users")

      console.log(response.data)
      setArray(response.data)
      }
      catch(error){
        console.error(error)
      }
    }

    attri();

    act();
  }, []);

  return (
    <div>
      {/* {(array || [])?.map((item) => (
        <li>{item.id}</li>
      ))}  */}
    </div>
  );
}

export default Acept;
