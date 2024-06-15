import React, { useState } from 'react'
import Header from './components/Header'
import MisionIndividual from './components/MisionIndividual'
import GridDeMisiones from './components/GridDeMisiones'

export const SpaceXApp = () => {
  const [misionSeleccionada,setMisionSeleccionada]=useState(null);
  const handleMisionSeleccionada=(mision)=>{
    setMisionSeleccionada(mision)
  }  
  const handleBackToHome=()=>{setMisionSeleccionada(null)}
  return (
    <>
        <div>
            <Header />
        </div>
        <div>
            {
              misionSeleccionada ?
              (
                <MisionIndividual mision={misionSeleccionada} onBack={handleBackToHome} />
                  
              ) : (
                <GridDeMisiones onMisionSeleccionada={handleMisionSeleccionada} />
              )
            }
        </div>
    </>
  )
}

