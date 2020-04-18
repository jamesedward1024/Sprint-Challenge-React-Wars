import React from 'react';
import Character from './Character';
import { Row } from "reactstrap";
function CharacterList(props) {
    return (
        <Row>
            {props.character.map(c =>
                <Character
                    c={c}
                    key={c.created}
                />
                    )}
</Row>
    )
}

export default CharacterList;