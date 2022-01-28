import React, {useEffect, useState} from "react"
import Epi from "./Epi"

const Episode = () => {
    const [state, setState] = useState([])
    const initialurl = 'https://rickandmortyapi.com/api/episode'
    const personajes = (url) => {
        fetch(url)
            .then(response => response.json())
            .then((data) =>  setState(data.results))
            .catch(error => console.log(error))

    }
    useEffect(() => {
        personajes(initialurl);
    
      }, [])
    return (
        <div className='container mt-5'>
             <Epi ep={state} />
        </div>
    )
}

export default Episode