
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { aggiorna, svuota } from "../../../redux/inputRicettaSlice"
import { aggiornaElenco } from "../../../redux/elenocRicetteSlice"
import axios from "axios"
import { premuto, resetPremuto } from '../../../redux/ricercaEffettuata'
import { registraStato } from '../../../redux/statoRichiesta'



export const BarraRicerca = () => {
  const inputRicetta = useSelector((state) => state.inputRicetta.value)
  const cercato = useSelector((state) => state.ricercaEffettuata.value)
  const elencoRicette = useSelector((state) => state.elencoRicette.value);
  const statoRichiesta = useSelector((state) => state.statoRichiesta.value);

  const dispatch = useDispatch()

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      cercaRicette()
      dispatch(svuota())
    }
  };

  const cercaRicette = () => {
    if (inputRicetta) {
      const apiKey = import.meta.env.VITE_API_KEY;
      const url = `https://api.spoonacular.com/recipes/complexSearch?diet=vegetarian&query=${inputRicetta}&apiKey=${apiKey}`
      axios.get(url)
        .then(response => {
          dispatch(aggiornaElenco(response.data.results))
          dispatch(premuto())
        })
        .catch(error => {
          console.error('There was an error!', error);
          dispatch(registraStato(error.response.status))
        })
    }
  }



  const handleChange = (e) => {
    dispatch(resetPremuto())
    dispatch(aggiorna(e.target.value))
  }


  const handleClick = () => {
    cercaRicette()
    dispatch(svuota())
  }

  return (
    <div className='ricerca-container'>
      <div className="ricerca-ricetta">
        <input value={inputRicetta} onKeyDown={handleKeyDown} onChange={handleChange} type="text" placeholder="Search recipes..." />
        <button onClick={handleClick}> 🔍 </button>
      </div>
      {cercato && elencoRicette.length === 0 && <p>No recipes found.</p>}
      {statoRichiesta == 402 && <p>Exceeded daily request limit, come back tomorrow.</p>}
    </div>
  )
}