import { useDispatch, useSelector } from 'react-redux';
import { aggiorna, svuota } from "../../../redux/inputRicettaSlice";
import { aggiornaElenco } from "../../../redux/elenocRicetteSlice";
import axios from "axios";
import { premuto, resetPremuto } from '../../../redux/ricercaEffettuata';
import { registraStato } from '../../../redux/statoRichiesta';
import { useCallback } from 'react';

export const BarraRicerca = () => {
  const inputRicetta = useSelector((state) => state.inputRicetta.value);
  const cercato = useSelector((state) => state.ricercaEffettuata.value);
  const elencoRicette = useSelector((state) => state.elencoRicette.value);
  const statoRichiesta = useSelector((state) => state.statoRichiesta.value);

  const dispatch = useDispatch();

  const cercaRicette = useCallback(async () => {
    if (!inputRicetta) return;

    try {
      const apiKey = import.meta.env.VITE_API_KEY;
      const url = `https://api.spoonacular.com/recipes/complexSearch?diet=vegetarian&query=${inputRicetta}&apiKey=${apiKey}`;
      const response = await axios.get(url);

      if (response.data.results) {
        dispatch(aggiornaElenco(response.data.results));
        dispatch(premuto());
      } else {
        console.error('No results found.');
      }
    } catch (error) {
      console.error('Error fetching recipes:', error);
      dispatch(registraStato(error.response ? error.response.status : 'Unknown error'));
    }
  }, [inputRicetta, dispatch]);


  const handleKeyDown = useCallback((event) => {
    if (event.key === 'Enter') {
      cercaRicette();
      dispatch(svuota());
    }
  }, [cercaRicette, dispatch]);


  const handleChange = useCallback((e) => {
    dispatch(resetPremuto());
    dispatch(aggiorna(e.target.value));
  }, [dispatch]);


  const handleClick = useCallback(() => {
    cercaRicette();
    dispatch(svuota());
  }, [cercaRicette, dispatch]);

  return (
    <div className='ricerca-container'>
      <div className="ricerca-ricetta">
        <input
          value={inputRicetta}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          type="text"
          placeholder="Search recipes..."
        />
        <button onClick={handleClick}> 🔍 </button>
      </div>
      {cercato && elencoRicette.length === 0 && <p>No recipes found.</p>}
      {statoRichiesta === 402 && <p>Exceeded daily request limit, come back tomorrow.</p>}
      {cercato && elencoRicette.length > 0 && <h2 className='titolo-risultati'>Results:</h2>}
    </div>
  );
};