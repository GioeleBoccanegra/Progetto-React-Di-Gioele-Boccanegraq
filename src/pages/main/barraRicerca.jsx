
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { aggiorna, svuota } from "../../redux/inputRicettaSlice"
import { aggiornaElenco } from "../../redux/elenocRicetteSlice"
import axios from "axios"
import { premuto, resetPremuto } from '../../redux/ricercaEffettuata'



export const BarraRicerca = () => {
  const inputRicetta = useSelector((state) => state.inputRicetta.value)
  const cercato = useSelector((state) => state.ricercaEffettuata.value)
  const elencoRicette = useSelector((state) => state.elencoRicette.value);

  const dispatch = useDispatch()

  const cercaRicette = () => {
    if (inputRicetta) {
      const apiKey = import.meta.env.VITE_API_KEY;
      const url = `https://api.spoonacular.com/recipes/complexSearch?diet=vegetarian&query=${inputRicetta}&apiKey=${apiKey}`
      axios.get(url)
        .then(response => {
          dispatch(aggiornaElenco(response.data.results))
          console.log(elencoRicette)
          dispatch(premuto())
        })
        .catch(error => {
          console.error('There was an error!', error);
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
    <div>
      <div className="ricerca-ricetta">
        <input value={inputRicetta} onChange={handleChange} type="text" placeholder="Cerca..." />
        <button onClick={handleClick}> 🔍 </button>
      </div>
      {cercato && elencoRicette.length === 0 && <p>Nessuna ricetta trovata.</p>}
    </div>
  )
}