import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

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
            </div>
        );
    }
}

//Send for export
export default MovieItem;