import React from 'react'
import Card from '../card/Card';
import './Galeria.css'

const Galeria = ({album}) => {
    return (
        <div className='galeria'>
        {album?.map((cancion, index) => {
            return <Card key={index} nombre={cancion?.nombre} artista={cancion?.artista}/>
        })}
        </div>
    )
}

export default Galeria;