import React, { useState, useEffect } from 'react'
import Scoreboard from './Board/Scoreboard'
import Gameboard from './Board/Gameboard'
import styled from 'styled-components'

const BodyContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 2rem;
`

const Body = () => {
    const [places, setPlaces] = useState([]);
    const [clickedPlaces, setClickedPlaces] = useState([]);
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [modal, setModal] = useState(false);

    useEffect(() => {  
        const loadPlaces = async () => {
            setPlaces(shuffle(await fetchPlaces()));
        }
        
        loadPlaces();
    }, [bestScore])

    const fetchPlaces = () => {
        return [
        {   name: 'Cinque Terre',
            url: 'cinque-terre.jpg'
        },
        {   name: 'The Colosseum',
            url: 'colosseum.jpg'
        },
        {   name: 'The Grand Canal',
        url: 'grand-canal.jpg'
        },
        {   name: 'Leaning Tower of Pisa',
            url: 'leaning-tower-of-pisa.jpg'
        },
        {   name: 'Milan Duomo',
        url: 'milano-duomo.jpg'
        },
        {   name: 'The Pantheon',
        url: 'pantheon.jpg'
        },
        {   name: 'Rialto Bridge',
        url: 'rialto-bridge.jpg'
        },
        {   name: 'St Marks Square',
        url: 'st-marks-square.jpg'
        },
        {   name: 'St Peters Basilica',
        url: 'st-peters-basilica.jpg'
        },
        {   name: 'Trevi Fountain',
        url: 'trevi-fountain.jpg'
        },
        {   name: 'The Vatican',
        url: 'vatican.jpg'
        },
        {   name: 'Mount Vesuvius',
        url: 'vesuvius.jpg'
        },
        ]
    }

    const shuffle = (array) => {
        return [...array].sort(() => Math.random() - 0.5);
    }

    const handlePlaceClick = (placeName) => {
        setModal(false);
        playRound(placeName);
        setPlaces(shuffle(fetchPlaces()));
    }

    const playRound = (placeName) => {
        if (clickedPlaces.includes(placeName)) { 
            resetGame() 
        } else {
            if (score + 1 > bestScore) { setBestScore(score + 1) }
                setScore(score + 1);
                setClickedPlaces((prevState) => [...prevState, placeName])
            }
    }

    const Modal = () => {
        const showHide = modal ? "block" : "none";
        
        return (
          <div style={{display: showHide}}>
            <section style={{marginBottom: '1rem', color: 'red'}}>
              You clicked the same picture! Try again
            </section>
          </div>
        );
    }

    const resetGame = () => {
        setModal(true);         
        setClickedPlaces([]);
        setScore(0);
    }

    return <BodyContainer>
        <Modal />
        <Scoreboard score={score} bestScore={bestScore}/>
        <Gameboard places={places} handlePlaceClick={handlePlaceClick}></Gameboard>
    </BodyContainer>
}

export default Body; 