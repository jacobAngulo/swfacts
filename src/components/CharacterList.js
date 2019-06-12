import React from 'react';
import CharacterCard from './CharacterCard'

function CharacterList(props) {
    return (
        <div>
            {props.characters.map((character) => {
                return (
                    <CharacterCard
                    character={character} 
                    />
                )
            })}
        </div>
    )
}

export default CharacterList