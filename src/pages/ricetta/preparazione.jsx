export const Preparazione = ({ preparazione }) => {

  return (
    <>
      <div className="container-n-preparazione">
        <p className="numero-preparazione">{preparazione.number}</p>
        <p className="istruzione-preparazione">{preparazione.step}</p>
      </div>
    </>
  )

}