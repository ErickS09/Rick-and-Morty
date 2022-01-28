import React, {useEffect, useState} from "react"
import Loc from "./Loc"

const Location = () => {
    const [state, setState] = useState([])
    const initialurl = 'https://rickandmortyapi.com/api/location'
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
             <Loc loca={state} />
        </div>
    )
}

export default Location