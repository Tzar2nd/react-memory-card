import React from 'react'
import styled from 'styled-components'
import Card from './Card'

const GameGrid = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
margin-top: 2rem;
gap: 2rem;`

const Gameboard = ({places, handlePlaceClick}) => {
    
    const placeCards = places.map(place => (
        <Card 
            key={place.name} 
            place={place} 
            handlePlaceClick={handlePlaceClick}
        />
    ))

    return <>
        <GameGrid>
            {placeCards}
        </GameGrid>
    </>
}

export default Gameboard