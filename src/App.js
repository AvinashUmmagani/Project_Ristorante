import React,{Component} from 'react';
import {Navbar,NavbarBrand} from 'reactstrap'
import Menu from './components/MenuComponent';
import {DISHES} from './shared/dishes';
// import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div>
//       <Navbar color="info">
//         <div className = "container"> <NavbarBrand>Starter</NavbarBrand> </div>
//       </Navbar>
//       <Menu />
//     </div>
//   );
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }
  render(){
    return(
      <div>
       <Navbar color="info">
         <div className = "container"> <NavbarBrand>Starter</NavbarBrand> </div>
       </Navbar>
       <Menu dishes={this.state.dishes} />
     </div>
  );
};
};
export default App;
