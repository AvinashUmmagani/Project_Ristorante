import React,{Component} from 'react';
import Menu from './MenuComponent';
import Footer from './FooterComponent';
import {DISHES} from '../shared/dishes';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
        dishes: DISHES,
        selectedDish : null
        };
    }
    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId});
    }
    render(){
        return(
        <div>
            <Header/>
            <Menu dishes={this.state.dishes} 
                    onClick={(dishId) => this.onDishSelect(dishId)}/>
            <DishDetail dish={this.state.dishes.filter( dish => dish.id === this.state.selectedDish )[0]} />
            <Footer/>
        </div>
    );
    }
}
export default Main;
