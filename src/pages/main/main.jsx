
import { useSelector } from 'react-redux';
import { BarraRicerca } from './/barraRicerca/barraRicerca'
import './barraRicerca/barraRicerca.css'
import "./elencoRicette/elencoRicette.css"
import "./ricetta/ricetta.css"
import "./main.css"
import { ElencoRicette } from './elencoRicette/ElencoRicette';

export const Main = () => {
  const elencoRicette = useSelector((state) => state.elencoRicette.value);
  return (

    <div className="main-container">
      <div className="search-container">
        <h1>Search for vegan recipes</h1>
        <BarraRicerca />
      </div>
      <ElencoRicette elencoRicette={elencoRicette} />
    </div>
  )
}
