import React from 'react';

function Character(props) {
    return <div className="character">
        <p><span>Name:</span> <span>{props.c.name}</span></p>
    </div>
}

export default Character;