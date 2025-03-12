import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { aggiornaInfo } from "../../redux/informazioniRicettaSlice";
import axios from 'axios';
import { Ingredienti } from './ingredienti/Ingredienti';
import "./paginaRicetta.css";
import "./ingredienti/ingredienti.css";
import { Link } from 'react-router-dom';
import { Preparazione } from './preparazione/Preparazione';
import "./preparazione/preparazione.css";

export const PaginaRicetta = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const infoRicetta = useSelector((state) => state.informazioniRicetta.value);
  const dispatch = useDispatch();
  const location = useLocation();
  const { ricetta } = location.state;
  const url = '.././../../netifly/functions/dettagliRicetta.js';

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
    setLoading(true);
    setError(null);
    axios.get(url)
      .then(response => {
        const datiFiltrati = {
          ...response.data,
          extendedIngredients: rimuoviDuplicatiIngredienti(response.data.extendedIngredients || []),
        };

        dispatch(aggiornaInfo(datiFiltrati));
        setLoading(false);
      })
      .catch(error => {
        console.error('There was an error!', error);
        setError('There was an error fetching the recipe. Please try again later.');
        setLoading(false);
      });
  }, [ricetta.id, dispatch, url]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className='container-tutto'>
      <div className='link-container'>
        <Link to="/">Look for another recipe</Link>
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
          ))}
      </div>
    </div>
  );
};
