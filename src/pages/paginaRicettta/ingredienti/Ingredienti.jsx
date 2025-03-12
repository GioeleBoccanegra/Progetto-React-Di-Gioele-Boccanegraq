export const Ingredienti = ({ ingredienti }) => {

  return (
    <>
      <div className="ingrediente-e-qt-container">
        <h3 className="ingrediente">{ingredienti.name}:</h3>

        <p className="quantita-ingredienti">{ingredienti.original}</p>
      </div>
    </>
  )

}