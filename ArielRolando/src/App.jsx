import React from 'react';
import Banner from './assets/Componentes/Banner';
import Publi from './assets/Componentes/Publi'; 
import NavBar from './assets/Componentes/NavBar'; 
import ItemListContainer from './assets/Componentes/ItemListContainer'; 
import Derechos from './assets/Componentes/derechos';
import './App.css'; 
import './index.css'; 

const App = () => {
  return (
    <>
      <Publi/>
      <NavBar />
      <ItemListContainer />
      <Derechos />
      <Banner  />
      
    </>
  );
}

export default App;
