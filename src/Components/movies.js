import React, { Component } from 'react';
import MovieItem from './movieitem';

class Movies extends Component{
    render(){
        //Get array of movies, take it apart and for each do x.
        return this.props.films.map((film)=>{
            return <MovieItem myfilm={film} key={film._id} ReloadData = {this.props.ReloadData}></MovieItem>
        });
    }
}

//Send for export
export default Movies;