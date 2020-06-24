import React,{Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button,Modal, ModalHeader , ModalBody, Label, Row, Col } from 'reactstrap';
import {Link} from 'react-router-dom';
import {Control, LocalForm, Errors} from 'react-redux-form';

function RenderComments({comments}){
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

function RenderDish({dish}){
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

const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component{
    constructor(props){
        super(props);
        this.state= {
            isModalOpen : false,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }
    handleSubmit(values){
        this.toggleModal();
        console.log("Current state is : " + JSON.stringify(values));
        alert("Current state is : "+ JSON.stringify(values));
    }
    toggleModal(){
        this.setState({
            isModalOpen : !this.state.isModalOpen
        })
    }

    render(){
        return(
            <div>
            <Button outline onClick={this.toggleModal} >
                <span className="fa fa-edit primary"></span> Submit Comment
            </Button>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader>Submit Comment</ModalHeader>
                <ModalBody>
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                        <Row className="form-group">
                            <Col>
                                <Label htmlFor="rating" >Rating</Label>
                                        <Control.select model=".rating" name="rating"
                                            className="form-control">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Control.select>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col>
                                <Label htmlFor="author">Your Name</Label>
                                
                                    <Control.text model=".author" id="author" name="author"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                            minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            minLength: ' Must be greater than 2 characters',
                                            maxLength: ' Must be 15 characters or less'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col>
                                    <Label htmlFor="message">Comment</Label>
                                        <Control.textarea model=".comment" id="comment" name="comment"
                                            rows="6"
                                            className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col>
                                    <Button type="submit" color="primary">
                                     Submit
                                    </Button>
                                </Col>
                            </Row>
                    </LocalForm>
                </ModalBody>
            </Modal>
            </div>
        )
    }



}

const DishDetail = (props) => {
        if (props.dish != null){
            return (
                <div className='container'>
                    <div className='row' >
                        <Breadcrumb>
                            <BreadcrumbItem><Link to = '/menu'> Menu </Link> </BreadcrumbItem>
                            <BreadcrumbItem active > {props.dish.name} </BreadcrumbItem>
                        </Breadcrumb>
                        <div className='col-12'>
                            <h3>{props.dish.name}</h3>
                            <hr/>
                        </div>
                    </div>
                    <div className = 'row'>
                        <div className="col-12 col-md-5 m-1">
                            <RenderDish dish = {props.dish} />
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <RenderComments comments = {props.comments} />
                            <CommentForm/>
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



export default DishDetail;

                