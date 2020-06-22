import React,{Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
class DishDetail extends Component{
    renderComments(comments){
        const com = comments.map(( dishComment )=>{
            var d = new Date(dishComment.date);
            var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            return(
                <ul className = "list-unstyled">
                    <li>{dishComment.comment}</li>
                    <li>-- <span>{dishComment.author}</span>, <span>{months[d.getMonth()]}</span> <span>{d.getDate()+1}</span>, <span>{d.getFullYear()}</span></li>
                </ul>
            );
        });
        if(comments != null){
            return(
                <div>
                    <h4>Comments</h4>
                    {com}
                </div>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }

    renderDish(dish){
        return(
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    };

    render(){
        return (
            <div className = 'row'>
                <div  className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.dish)}
                </div>
                <div  className="col-12 col-md-5 m-1">
                    {this.renderComments(this.props.dish.comments)}
                </div>
            </div>
        );
    }
}
export default DishDetail;

                