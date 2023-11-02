import './App.css'
import Formulario from './components/formulario/Formulario';
import Galeria from './components/galleria/Galeria';
import { useState } from 'react';

function App() {
  const [cancion, setCancion] = useState({
    artista: "",
    nombre: ""
  })

  const [album, setAlbum] = useState([])
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (cancion?.artista?.length >= 3 && cancion?.nombre?.length >= 6) {
      setError(false);
      setAlbum([...album, cancion])
      setCancion({
        artista: "",
        nombre: ""
      })
      e.target.reset()
    } else {
      setError(true);
    }
  }

  return (
    <>
      <Formulario
        cancion={cancion}
        setCancion={setCancion}
        handleSubmit={handleSubmit}
        error={error}
        setError={setError}
      />
      {album.length>0 && <Galeria album={album} />}
    </>
  )
}

export default App
