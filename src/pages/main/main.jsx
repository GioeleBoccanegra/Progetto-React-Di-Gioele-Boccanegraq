
import { useSelector } from 'react-redux';
import { BarraRicerca } from './barraRicerca'
import './barraRicerca.css'
import "./elencoRicette.css"
import "./ricetta.css"
import { ElencoRicette } from './elencoRicette';

export const Main = () => {
  const elencoRicette = useSelector((state) => state.elencoRicette.value);
  return (

    <div>
      <div>
        <h1>ricerca ricette vegane</h1>
        <BarraRicerca /> {/* Barra di ricerca */}
      </div>
      <ElencoRicette elencoRicette={elencoRicette} /> {/* Passa elencoRicette al componente ElencoRicette */}
    </div>

  )
}
