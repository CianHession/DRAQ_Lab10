import React, { Component } from 'react';
import Movies from './movies';
import axios from 'axios';

class Read extends Component{

    componentDidMount() {
        //Use axios to interact with API
        axios.get('https://jsonblob.com/api/jsonblob/894944504570986496')
        // Callback function
        .then((response)=>{
            // update state
            this.setState({
                myMovies: response.data.movies
            })
        })
        // if not working catch, and thow error
        .catch((error)=>{
            console.log(error)
        });
    }

    //Way of storing data -> State {}
state = {

    myMovies: []        
};

    render(){
        return(
            <div>
                <h2>This is my Read component!</h2>
                {/* Send data to be sorted one by one */}
                <Movies films={this.state.myMovies}></Movies>
            </div>
        );
    }
}

//Send for export
export default Read;