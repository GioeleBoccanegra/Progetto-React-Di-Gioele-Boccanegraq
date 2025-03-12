import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { aggiornaInfo } from "../../redux/informazioniRicettaSlice"
import axios from 'axios';
import { Ingredienti } from './ingredienti/Ingredienti';
import "./paginaRicetta.css"
import "./ingredienti/ingredienti.css"
import { Link } from 'react-router-dom';
import { Preparazione } from './preparazione/Preparazione';
import "./preparazione/preparazione.css"



export const PaginaRicetta = () => {
  const infoRicetta = useSelector((state) => state.informazioniRicetta.value)
  const dispatch = useDispatch()
  const location = useLocation();
  const { ricetta } = location.state;
  const apiKey = import.meta.env.VITE_API_KEY;
  const url = `https://api.spoonacular.com/recipes/${ricetta.id}/information?apiKey=${apiKey}`

  // alcune ricette hanno ingredienti duplicati che causano errori
  const rimuoviDuplicatiIngredienti = (array) => {
    const visti = new Set();
    return array.filter((item) => {
      if (!visti.has(item.id)) {
        visti.add(item.id);
        return true;
      }
      return false;
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    axios.get(url)
      .then(response => {
        const datiFiltrati = {
          ...response.data,
          extendedIngredients: rimuoviDuplicatiIngredienti(response.data.extendedIngredients || [])
        };

        dispatch(aggiornaInfo(datiFiltrati));
        console.log(infoRicetta)
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, [ricetta.id, dispatch, url]);


  return (

    <div className='container-tutto'>
      <div className='link-container'>
        <Link to="/">look for another recipe</Link>
      </div>
      <div className='nome-img-ricetta'>
        <h1>{ricetta.title}</h1>
        <img src={ricetta.image} alt={ricetta.title} />
      </div>

      <div className='ingrdienti'>
        <h2>Ingredients</h2>
        {infoRicetta.extendedIngredients?.map((ingredienti) => (
          <Ingredienti key={ingredienti.id} ingredienti={ingredienti} />
        ))}
      </div>
      <div className='preparazioni'>
        <h2>Preparation</h2>
        {infoRicetta.analyzedInstructions?.length > 0 &&
          infoRicetta.analyzedInstructions[0].steps?.map((preparazione) => (
            <Preparazione key={preparazione.number} preparazione={preparazione} />
          ))
        }
      </div>
    </div >

  )
}
