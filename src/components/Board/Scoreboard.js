import React from 'react'
import styled from 'styled-components'


const ScoreboardContainer = styled.div`
display: flex;
align-items: center; 
justify-content: space-around;
width: 750px;
`

const Score = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 1rem;
width: 25%;
font-size: 1.8rem;
border-radius: 25px;
text-align: center;
box-shadow: rgba(0, 0, 0, 0.4) 0px 5px 10px;
background-color: ${props => props.scoreColor}
`

const Scoreboard = ({score, bestScore}) => {

    return <>
    <ScoreboardContainer>
        <Score scoreColor='#ccc'>Current Score: {score}</Score>
        <Score scoreColor='green'>Best score: {bestScore}</Score>
    </ScoreboardContainer>
    </>
}

export default Scoreboard;