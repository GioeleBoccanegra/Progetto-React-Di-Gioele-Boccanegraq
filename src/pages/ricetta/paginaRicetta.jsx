import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { aggiornaInfo } from "../../redux/informazioniRicettaSlice"
import axios from 'axios';
import { Ingredienti } from './ingredienti';
import "./paginaRicetta.css"
import "./ingredienti.css"
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';



export const PaginaRicetta = () => {
  const navigate = useNavigate();
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
      <Link to="/">indietro</Link>
      <div className='nome-img-ricetta'>
        <h1>{ricetta.title}</h1>
        <img src={ricetta.image} alt={ricetta.title} />
      </div>

      <div className='ingrdienti'>

        {infoRicetta.extendedIngredients?.map((ingredienti) => (
          <Ingredienti key={ingredienti.id} ingredienti={ingredienti} />
        ))}
      </div>
    </div >

  )
}