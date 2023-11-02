import React from 'react'
import './Formulario.css';

const Formulario = ({cancion, setCancion, handleSubmit, error}) => {
  return (
    <>
        <form onSubmit={handleSubmit}>
            <h2>Nueva Cancion</h2>
            <label>Artista</label>
            <input type='text'placeholder="Ingrese nombre del artista" onChange={(e)=>setCancion({...cancion, artista: e.target.value.trim()})}/>
            <label>Nombre de Canción</label>
            <input type='text'placeholder="Ingrese nombre de la canción" onChange={(e)=>setCancion({...cancion, nombre: e.target.value.trim()})}/>
            <button>Enviar</button>
        </form>
        {error && <h4 style={{color: 'red'}}>Por favor chequea que la información sea correcta</h4>}
    </>
  )
}

export default Formulario
