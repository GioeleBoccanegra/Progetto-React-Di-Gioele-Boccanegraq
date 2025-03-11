
import { Ricetta } from "./ricetta"


export const ElencoRicette = ({ elencoRicette }) => {

  return (
    <div className="elenco-ricette">
      {elencoRicette?.map((ricetta) => (
        <Ricetta key={ricetta.id} ricetta={ricetta} />
      ))}
    </div>
  )
}
