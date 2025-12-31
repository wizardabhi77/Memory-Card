import { useEffect, useState } from "react"

export function Card ({index,pokemon}) {

    const [pokeImage,setPokeImage] = useState(null); 

    useEffect(()=> {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then(response => response.json())
        .then(data=> setPokeImage(data.sprites.front_default))
        
        
        
    },[index,pokemon])

    return (
        <div className="card" >
            <h2>{pokemon}</h2>
            <img src={pokeImage} alt="" />
            
        </div>
    )
}

