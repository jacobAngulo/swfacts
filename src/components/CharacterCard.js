import React from 'react'

function CharacterCard(props) {
    return (
        <div className="character-card">
            <h1>{props.character.name}</h1>
            <ul>
                <li>height: {props.character.height}</li>
                <li>mass: {props.character.mass}</li>
                <li>hair color: {props.character.hair_color}</li>
                <li>skin color: {props.character.skin_color}</li>
                <li>eye color: {props.character.eye_color}</li>
                <li>birth year: {props.character.birth_year}</li>
                <li>gender: {props.character.gender}</li>
            </ul>
        </div>
    )
}

export default CharacterCard