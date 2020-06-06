import React from 'react';
import {Navbar,NavbarBrand} from 'reactstrap'
import Menu from './components/MenuComponent';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <Navbar color="primary">
        <div className = "container"> <NavbarBrand>Starter</NavbarBrand> </div>
      </Navbar>
      <Menu />
    </div>
  );
}

export default App;
