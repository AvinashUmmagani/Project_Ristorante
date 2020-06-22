import React,{Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
class DishDetail extends Component{

    renderComments(comments){
        const com = comments.map(( dishComment )=>{
            return(
                <ul className = "list-unstyled">
                    <li>{dishComment.comment}</li>
                    <li><p>--- {dishComment.author}, {new Intl.DateTimeFormat('en-US', {year : 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(dishComment.date)))} </p></li>
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
        if (this.props.dish != null){
        return (
            <div className='container'>
                <div className = 'row'>
                    <div  className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div  className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.dish.comments)}
                    </div>
                </div>
            </div>
        );
        }
        else{
            return (
                <div></div>
            )
        }
    }
}
export default DishDetail;

                