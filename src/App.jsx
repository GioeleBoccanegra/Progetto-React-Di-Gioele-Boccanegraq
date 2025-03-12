
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Main } from './pages/main/main'
import { PaginaRicetta } from './pages/paginaRicettta/paginaRicetta'
function App() {

  return (

    <>
      <div>
        <Router>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/ricetta' element={<PaginaRicetta />} />
          </Routes>
        </Router>

      </div>
    </>

  )
}

export default App
