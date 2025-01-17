import styled from 'styled-components';
import './App.css';
import bg from './img/bg.png'
import { MainLayout } from './styles/Layout'
import Orb from './components/Orb/Orb';
import Navigation from './components/Navigation/Navigation';
import React,{ useState } from 'react';

const AppStyled = styled.div`
height:100vh;
background-image: url(${bg});
position:relative;
`
function App() {
  const [active,setActive]= useState(1)
  return (
    <AppStyled bg={bg} className="App">
      <MainLayout>
        <Navigation active={active} setActive={setActive} />
      </MainLayout>
    </AppStyled>
  );
}



export default App;
