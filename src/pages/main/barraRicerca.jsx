
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { aggiorna, svuota } from "../../redux/inputRicettaSlice"
import { aggiornaElenco } from "../../redux/elenocRicetteSlice"
import axios from "axios"




export const BarraRicerca = () => {
  const inputRicetta = useSelector((state) => state.inputRicetta.value)
  const dispatch = useDispatch()

  const cercaRicette = () => {
    if (inputRicetta) {
      const apiKey = import.meta.env.VITE_API_KEY;
      console.log(inputRicetta)
      const url = `https://api.spoonacular.com/recipes/complexSearch?diet=vegetarian&query=${inputRicetta}&apiKey=${apiKey}`
      axios.get(url)
        .then(response => {
          dispatch(aggiornaElenco(response.data.results))
        })
        .catch(error => {
          console.error('There was an error!', error);
        })
    }
  }



  const handleChange = (e) => {
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
    </div>
  )
}