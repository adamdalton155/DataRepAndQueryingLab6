import React, {Component} from 'react';
import { Movies } from './Movies';
import axios from 'axios';

export class Read extends React.Component{
    //Retrives the json URL data and saves it the mymovies array 
    componentDidMount(){
        axios.get('https://jsonblob.com/api/jsonblob/894944504570986496')
            .then((response)=>{
                this.setState({
                    mymovies: response.data.movies
                })
            })
            .catch((error)=>{
                console.log(error)
            })
    }
    //movies[] stores JSON information in array
    state = {
        mymovies:[] 
    };

    //Allows us to store the array information
    render(){
        return(
            <div>
                <h3>Hello from read component</h3>
                <Movies films={this.state.mymovies}></Movies>
            </div>
        );
    }
}