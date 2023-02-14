import React from 'react';

import './card.styles.css';

function Card(props) {
    const { id, name, email } = props.monster;
    
    return (
        <div className='card-container'>
            <img 
                src={`https://robohash.org/${id}?set=set2&size=180x180`} 
                alt={`monster ${name}`} 
            />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}

export default Card;