import React, { useEffect, useState, } from "react";
import "./ApiFetch.css"

export default function ApiTheRing() {

    const [movies,setMovies] = useState('')

    const headers = {
        'Accept': 'application/json',
        'Authorization': 'Bearer X-hr2ifXI6M13U5Bk49y'
    }


       async function consumingApi() {
            
            const response = await fetch('https://the-one-api.dev/v2/movie', { headers: headers })
            const data = await response.json()
            const removeItem = data.docs.splice(2,6)
            const movieList = removeItem.map(movieName => movieName.name)
            setMovies(movieList)
        }

         useEffect(()=>{
            consumingApi()
         },[])
                

    return (
        <h1>{movies}</h1>
    )
}






