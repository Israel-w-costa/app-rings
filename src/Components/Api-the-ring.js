import React, { useState, } from "react";

export default function ApiTheRing() {

    const headers = {
        'Accept': 'application/json',
        'Authorization': 'Bearer X-hr2ifXI6M13U5Bk49y'
    }
    

    async function ApiFetch () {
        const fetchApi = await  fetch('https://the-one-api.dev/v2/movie', { headers: headers })
         const response = await fetchApi.json()

           console.log (
            response.docs.map(movies => movies.name)
           );
    }

    ApiFetch()
    
    
        return(
            <h1></h1>
        )
    }






