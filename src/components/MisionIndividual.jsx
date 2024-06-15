import React from "react";

const MisionIndividual =  ({mision,onBack}) => {

    return (
        <div>
            <button className="button" onClick={onBack}> Back </button>
            <h1>{mision.name}</h1>
            {mision.links.patch.small && (
                <img src={mision.links.patch.small}/>
            )}
            <p>Fecha: {mision.date_utc}</p>
            <p>{mision.details ? mision.details : 'No hay datos de fallas disponibles'}</p>
        </div>
    )
};
export default MisionIndividual;