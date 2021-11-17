import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';

class MovieItem extends Component {
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
                <Link to={'/edit/' + this.props.myfilm._id} className="btn btn-primary">Edit Movie</Link>
            </div>
        );
    }
}

//Send for export
export default MovieItem;