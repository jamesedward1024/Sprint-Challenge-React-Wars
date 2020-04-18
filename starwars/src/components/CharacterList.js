import React from 'react';
import Character from './Character';

function CharacterList(props) {
    return (
        <div className="characterlist">
            {props.character.map(c =>
                <Character
                    c={c}
                    key={c.created}
                />
            )}
        </div>
    )
}

export default CharacterList;