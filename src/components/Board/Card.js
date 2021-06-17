import React from 'react'
import styled from 'styled-components'

const CardWrapper = styled.div`
padding: 1rem;
box-shadow: rgba(0, 0, 0, 0.4) 0px 5px 10px;
border-bottom-left-radius: 25px;
border-bottom-right-radius: 25px;
cursor: pointer; 
transition: transform .15s; 
&:hover {
    transform: scale(1.05);
  }
`

const PlaceName = styled.p`
text-align: center;
padding: .5rem;
`

const ImagePlace = styled.img`
object-fit: cover;
width: 200px;
height: 150px;
`

const Card = ({place, handlePlaceClick}) => {

    return <CardWrapper 
        key={place.name} 
        place={place.name}
        onClick={() => handlePlaceClick(place.name)}
        >
        <ImagePlace src={require(`../../assets/${place.url}`).default} alt=""/>
    <PlaceName>{place.name}</PlaceName>
    </CardWrapper>

}

export default Card; 