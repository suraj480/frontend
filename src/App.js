import styled from 'styled-components';
import './App.css';
import bg from './img/bg.png'
import { MainLayout } from './styles/Layout'
import Orb from './components/Orb/Orb';
const AppStyled = styled.div`
height:100vh;
background-image: url(${bg});
position:relative;
`
function App() {
  return (
    <AppStyled className="App">
      <MainLayout>
        <Orb />
      </MainLayout>
    </AppStyled>
  );
}



export default App;
