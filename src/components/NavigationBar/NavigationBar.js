import {  BrowserRouter as Router, Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';

const NavigationBar = () => {

    const [isBrowse, setIsBrowse] = useState(false);
    const [isPickACharacter, setIsPickACharacter ] = useState(false);

    const onClickChange = () => {
        let MyDiv = document.getElementById('myDIV')
        this.setState({
            active: MyDiv.style.display === 'none'
        })
    }

    const history = useHistory();
    return (
        <Container>
            <Router>
                <NavItem  onClick={() => {history.push('browse')}}>Browse</NavItem>
                <NavItem onClick={() => history.push('/pick-a-character')}> Pick a character</NavItem>
            </Router>
        </Container>
    )
}

const Container = styled.div`
  margin-top: 20em;
  color: white;
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 5em;
`

const NavItem = styled.button`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  padding: 12px 24px;
  border: none;
  outline: none;
  background: #EFEFFD;
  color: #260086;
  cursor: pointer;
  border-radius: 12px;
  font-weight: bold;
    
  &:hover {
    background-color: #260086;
    color: white;
    transform: scale(1.05);
  }

  &.active{
    background-color: #ff0000;
    color: white;
  }
`

export default NavigationBar


