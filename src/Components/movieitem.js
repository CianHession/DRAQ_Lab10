import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

class MovieItem extends Component {
    render() {
        return (
            <div>
                {/* Using Card Component from bootstrap */}
                <Card>
                    <Card.Header>{this.props.myfilm.Title}</Card.Header>
                    <Card.Body>
                        <blockquote>
                            <img src={this.props.myfilm.Poster}></img>
                            <footer>
                                <p>{this.props.myfilm.Year}</p>
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

//Send for export
export default MovieItem;