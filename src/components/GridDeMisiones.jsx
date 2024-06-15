import React,{useState,useEffect} from "react";

const GridDeMisiones=({onMisionSeleccionada})=>{
    const [misiones,setMisiones]=useState([])
    useEffect(()=>{
        fetch('https://api.spacexdata.com/v5/launches')
        .then(response=>response.json())
        .then(data=>{
            console.log(data) 
            setMisiones(data)
        }) 
        .catch(error=>console.error('Error al traer los datos: ', error))
    },[])

    return(
        <div className="grid-misiones-container">
            {misiones.map(mision=>(
                <article className="grid-misiones" key={mision.id} onClick={()=>onMisionSeleccionada(mision)}>
                    <img src={mision.links.patch.small} />
                    <h2>{mision.name}</h2> 
                </article>
            ))}
        </div>
    )
}

export default GridDeMisiones;