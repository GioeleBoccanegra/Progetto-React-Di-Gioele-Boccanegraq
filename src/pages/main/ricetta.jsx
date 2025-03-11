import { useNavigate } from 'react-router-dom';

export const Ricetta = ({ ricetta }) => {
  console.log(ricetta)
  const navigate = useNavigate();
  const c = () => {
    console.log("xiao")
    navigate('/ricetta', { state: { ricetta } });
  }
  return (
    <div onClick={c} className="ricetta-container">
      <h2>{ricetta.title}</h2>
      <img src={ricetta.image} alt={ricetta.title} />
    </div>
  )
}