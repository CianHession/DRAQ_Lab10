import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class MovieItem extends Component {
    //Constructor
    constructor(){
        super();
        //Bind To (if not ----> error)
        this.DeleteMovie = this.DeleteMovie.bind(this);
    }

    //Call method for delete movie
    DeleteMovie(){
        //Log delete + id
        console.log("Delete: " + this.props.myfilm._id);

        axios.delete('http://localhost:4000/api/movies/' +this.props.myfilm._id)
        .then(()=>{
        this.props.ReloadData();
        })
        .catch(()=>{

        })
    }

    render() {
        return (
            <div>
                {/* Using Card Component from bootstrap */}
                <Card>
                    <Card.Header>{this.props.myfilm.title}</Card.Header>
                    <Card.Body>
                        <blockquote>
                            <img src={this.props.myfilm.poster}></img>
                            <footer>
                                <p>{this.props.myfilm.year}</p>
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
                {/* Change link to edit */}
                <Link to={'/edit/' + this.props.myfilm._id} className="btn btn-warning">Edit Movie</Link>
                {/* Button for Deletion*/}
                <Button variant="danger" onClick={this.DeleteMovie}>Delete</Button>
            </div>
        );
    }
}

//Send for export
export default MovieItem;