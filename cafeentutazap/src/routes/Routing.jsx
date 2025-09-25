import React from 'react'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Inicio from '../pages/Inicio';
import Café from '../pages/Café';
import Comunidad from '../pages/Comunidad';
import Contacto from '../pages/Contacto';

const Routing =() => {
  return (

    <Router>
        <Routes>
            <Route path='/Inicio' element={<Inicio />} />
            <Route path='/Café' element={<Café />} />
            <Route path='/Comunidad' element={<Comunidad />} />
            <Route path='/Contacto' element={<Contacto />} />
        </Routes>
    </Router>
    
  );
};

export default Routing