import styled from 'styled-components'

const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    background: #bbb;
`

const FlagContainer = styled.div`
    display: flex;
    width: 99px;
    height: 64px;
    margin: 1rem;
`

const FlagColor = styled.div`
    width: 33px;
    height: 100%;
    background: ${props => props.flagColor}
`

const Divider = styled.div`
    display: flex;
    justify-content: center;
    background: #888;
    height: 36px;
`

const ItalianFlag = () => {
    return <FlagContainer>
        <FlagColor flagColor='green'></FlagColor>
        <FlagColor flagColor='white'></FlagColor>
        <FlagColor flagColor='red'></FlagColor>
    </FlagContainer>
}

const Header = () => {
    return <>
    <HeaderContainer>
        <ItalianFlag/>
        <h1>Landmarks of Italy</h1>
    </HeaderContainer>
    <Divider>
        <h2>Click below to play. Don't click the same picture twice!</h2>
    </Divider>
</>
}

export default Header; 