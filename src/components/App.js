import React, { useEffect, useState } from "react"

function App() {
    const [dog, setDog] = useState(null)

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(r => r.json())
        .then(dog => {
            setDog(dog.message)
            console.log(dog)
        })
    }, []) // put dog, and dog.message in dependancies array to see different actions

    if (!dog) return ( <p>Loading...</p>)

    console.log("render first")

    return (<img src={dog} alt="A Random Dog"/>)

}

export default App