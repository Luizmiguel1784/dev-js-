import { useEffect, useState } from 'react';
import PokeCard from './components/PokeCard';

function App() {
    
    const[data, setData] = useState({})


    useEffect (() => {
        fetch("https://pokeapi.co/api/v2/pokemon/ditto")
        .then((response) => response.json())
        .then((data) => setData(data)
        )
    }, [])

    console.log("aqui é o state", data)
    
    return(
        <>
        <h1>Items:</h1>
     
        <PokeCard
        name = {data.name}
        image = {data.sprites.front_default}
        type = {data.types[0].type.name}

        />


        </>
        //    <>
        //    <h1>Items:</h1>
        //    <Card
        //    title="apple Tag"
        //    description ="retreador apple"
        //    price = {1000}
        //    category = "eletronico"
        //    src =  {data.image} />
           
        //    </>
    );
}
export default App