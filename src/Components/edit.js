import React, { Component } from 'react';
import axious from 'axios'; //Allows to talk http, interact with api
import axios from 'axios';

class Edit extends Component {
    constructor() {
        super();
        //Bind to Functions to Add Movie(s)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeMovieName = this.onChangeMovieName.bind(this);
        this.onChangeMovieYear = this.onChangeMovieYear.bind(this);
        this.onChangeMoviePoster = this.onChangeMoviePoster.bind(this);

        //Set-up Blank State
        this.state = {
            Title: '',
            Year: '',
            Poster: ''
        }
    }

    handleSubmit(event) {
        //obj for new movie addition
        const newMovie = {
            title: this.state.Title,
            year: this.state.Year,
            poster: this.state.Poster
        }
        //Replace data from url + data thats changing
        axious.put('http://localhost:4000/api/movies/' +this.state._id, newMovie)
        .then()
        .catch();

        //URL + What to Send
        // axios.post('http://localhost:4000/api/movies', newMovie)
        //     .then((response) => { //callback function
        //         console.log(response);
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     })

        //Stop handleSubmit refreshing page aka returning value to blank
        event.preventDefault();
        //Removes Values left in input boxes, does not reset values to default
        this.setState({
            Title: '',
            Year: '',
            Poster: ''
        })
    }

    //What data gets updated/added
    onChangeMovieName(event) {
        this.setState({
            //Title add/change
            Title: event.target.value,
        })
    }

    //What data gets updated/added
    onChangeMovieYear(event) {
        this.setState({
            //Year add/change
            Year: event.target.value
        })
    }

    //If component mounts
    componentDidMount(){
        console.log(this.props.match.params.id);
        axios.get('http://localhost:4000/api/movies/' +this.props.match.params.id)
        .then((res)=>{
            //what to change
            this.setState({
                Title:res.data.title,
                Year:res.data.year,
                Poster:res.data.poster,
                _id:res.data._id,
            })
        })
        .catch();
    }

    //What data gets updated/added
    onChangeMoviePoster(event) {
        this.setState({
            //Poster add/change
            Poster: event.target.value
        })
    }
    render() {
        return (
            <div>
                <h2>This is my Edit component!</h2>
                {/* Use form for adding movies using handleSubmit event */}
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Edit Movie Name: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Title}
                            //When changes oCMN
                            onChange={this.onChangeMovieName}
                        />
                    </div>

                    {/* Movie Title */}
                    <div className="form-group">
                        <label>Edit Movie Year: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Year}
                            //When changes oCMY
                            onChange={this.onChangeMovieYear}
                        />
                    </div>

                    {/* Movie Year */}
                    <div className="form-group">
                        <label>Edit Poster URL: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Poster}
                            //When changes oCMT
                            onChange={this.onChangeMoviePoster}
                        />
                    </div>

                    {/* Movie Image */}
                    <div>
                        <input type="submit"
                            value="Edit Movie"
                            className="btn btn-primary"
                        />
                    </div>
                </form>
            </div>
        );
    }
}

//Send for export
export default Edit;