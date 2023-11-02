import React from "react";
import './Card.css';

const Card = ({nombre, artista}) => {
    return(
        <div className="card">
            <h3>{nombre}</h3>
            <h4>{artista}</h4>
        </div>
    )
}

export default Card